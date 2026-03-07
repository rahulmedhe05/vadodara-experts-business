#!/usr/bin/env python3
"""
Create 20,000 keyword page subfolders under each niche folder.
Parses all-200-niches-keywords.md and creates URL-slug folders.
"""

import os
import re
import sys

APP_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "app")
KEYWORDS_FILE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "all-200-niches-keywords.md")

def slugify(text):
    """Convert keyword text to URL-friendly slug."""
    s = text.lower().strip()
    s = s.replace("&", "and")
    s = re.sub(r"[^a-z0-9\s-]", "", s)
    s = re.sub(r"[\s]+", "-", s)
    s = re.sub(r"-+", "-", s)
    s = s.strip("-")
    return s

def parse_keywords_file():
    """Parse the keywords MD file and return {niche_slug: [keyword_slugs]}."""
    with open(KEYWORDS_FILE, "r") as f:
        lines = f.readlines()

    # We want the SECOND complete set (lines 28880+ which has niches 1-200)
    # Find the second occurrence of "## Niche 1:" 
    niche1_positions = []
    for i, line in enumerate(lines):
        if line.strip().startswith("## Niche 1:"):
            niche1_positions.append(i)
    
    if len(niche1_positions) < 2:
        start_line = niche1_positions[0] if niche1_positions else 0
    else:
        start_line = niche1_positions[1]  # Second set
    
    print(f"Parsing from line {start_line + 1}")
    
    # Get all existing folders
    existing_folders = set()
    for item in os.listdir(APP_DIR):
        if os.path.isdir(os.path.join(APP_DIR, item)):
            existing_folders.add(item)
    
    # Parse niches and keywords
    niches = {}  # {folder_slug: [keyword_slugs]}
    current_niche_name = None
    current_niche_slug = None
    current_keywords = []
    unmatched = []
    
    for i in range(start_line, len(lines)):
        line = lines[i].strip()
        
        # Check for niche header
        m = re.match(r"^## Niche \d+:\s*(.+?)\s*\(100 Keywords\)", line)
        if m:
            # Save previous niche
            if current_niche_slug and current_keywords:
                niches[current_niche_slug] = current_keywords
            
            niche_name = m.group(1)
            slug = slugify(niche_name)
            
            # Try to find matching folder
            if slug in existing_folders:
                current_niche_slug = slug
            else:
                # Try variations
                found = False
                for folder in existing_folders:
                    if folder == slug or slug.startswith(folder) or folder.startswith(slug):
                        current_niche_slug = folder
                        found = True
                        break
                if not found:
                    # Try removing common suffixes/prefixes for matching
                    slug_parts = set(slug.split("-"))
                    best_match = None
                    best_score = 0
                    for folder in existing_folders:
                        folder_parts = set(folder.split("-"))
                        overlap = len(slug_parts & folder_parts)
                        score = overlap / max(len(slug_parts), len(folder_parts))
                        if score > best_score and score >= 0.6:
                            best_score = score
                            best_match = folder
                    if best_match:
                        current_niche_slug = best_match
                    else:
                        unmatched.append((niche_name, slug))
                        current_niche_slug = None
            
            current_keywords = []
            current_niche_name = niche_name
            continue
        
        # Check for keyword line (numbered: "1. keyword text")
        km = re.match(r"^\d+\.\s+(.+)$", line)
        if km and current_niche_slug is not None:
            keyword = km.group(1)
            kw_slug = slugify(keyword)
            if kw_slug:
                current_keywords.append(kw_slug)
    
    # Save last niche
    if current_niche_slug and current_keywords:
        niches[current_niche_slug] = current_keywords
    
    if unmatched:
        print(f"\nWARNING: {len(unmatched)} niches could not match a folder:")
        for name, slug in unmatched:
            print(f"  - '{name}' → slug '{slug}'")
    
    return niches

def create_keyword_folders(niches, batch=None, batch_size=10):
    """Create keyword subfolders. batch=None means all."""
    niche_list = sorted(niches.keys())
    
    if batch is not None:
        start = batch * batch_size
        end = min(start + batch_size, len(niche_list))
        niche_list = niche_list[start:end]
        print(f"\nBATCH {batch}: Niches {start+1}-{end} of {len(niches)}")
    else:
        print(f"\nCreating ALL keyword folders for {len(niches)} niches")
    
    total_created = 0
    total_skipped = 0
    
    for niche_slug in niche_list:
        keywords = niches[niche_slug]
        niche_dir = os.path.join(APP_DIR, niche_slug)
        created = 0
        skipped = 0
        
        for kw_slug in keywords:
            kw_dir = os.path.join(niche_dir, kw_slug)
            if os.path.exists(kw_dir):
                skipped += 1
            else:
                os.makedirs(kw_dir, exist_ok=True)
                created += 1
        
        total_created += created
        total_skipped += skipped
        print(f"  {niche_slug}: {created} created, {skipped} skipped")
    
    print(f"\nTOTAL: {total_created} folders created, {total_skipped} skipped")
    return total_created

def verify(niches):
    """Count total keyword folders."""
    total = 0
    empty_niches = []
    for niche_slug, keywords in sorted(niches.items()):
        niche_dir = os.path.join(APP_DIR, niche_slug)
        if os.path.isdir(niche_dir):
            subdirs = [d for d in os.listdir(niche_dir) if os.path.isdir(os.path.join(niche_dir, d))]
            total += len(subdirs)
            if not subdirs:
                empty_niches.append(niche_slug)
    
    print(f"\nVERIFICATION:")
    print(f"  Niches with keywords: {len(niches) - len(empty_niches)}")
    print(f"  Empty niches: {len(empty_niches)}")
    print(f"  Total keyword folders: {total}")
    if empty_niches:
        print(f"  Empty: {', '.join(empty_niches[:10])}{'...' if len(empty_niches) > 10 else ''}")

if __name__ == "__main__":
    print("Parsing keywords file...")
    niches = parse_keywords_file()
    print(f"Found {len(niches)} matching niches with {sum(len(v) for v in niches.values())} total keywords")
    
    if len(sys.argv) < 2:
        print("\nUsage:")
        print("  python3 scripts/create-keyword-folders.py parse       # Just parse & show stats")
        print("  python3 scripts/create-keyword-folders.py create N    # Create batch N (0,1,2,...)")
        print("  python3 scripts/create-keyword-folders.py all         # Create ALL at once")
        print("  python3 scripts/create-keyword-folders.py verify      # Verify counts")
        sys.exit(0)
    
    cmd = sys.argv[1]
    
    if cmd == "parse":
        for slug, kws in sorted(niches.items()):
            print(f"  {slug}: {len(kws)} keywords")
    
    elif cmd == "create":
        batch = int(sys.argv[2]) if len(sys.argv) > 2 else 0
        batch_size = int(sys.argv[3]) if len(sys.argv) > 3 else 10
        create_keyword_folders(niches, batch=batch, batch_size=batch_size)
    
    elif cmd == "all":
        create_keyword_folders(niches)
    
    elif cmd == "verify":
        verify(niches)
