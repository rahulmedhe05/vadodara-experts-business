#!/usr/bin/env python3
"""
Rebuild all 200 niche folders in /app/ directory.
Step 1: Delete all old niche folders
Step 2: Create new folders based on the 200-niche keyword research
"""

import os
import shutil
import sys

APP_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "app")

# Files/folders to KEEP (not niche pages)
KEEP = {"about", "contact", "globals.css", "layout.tsx", "page.tsx", "robots.ts", "sitemap.ts"}

# Complete 200-niche folder slugs based on keyword research
NICHES = [
    # ── CATEGORY 1: HOME & LIFESTYLE SERVICES (1–50) ──
    "home-cleaning-services",           # 1
    "home-painting-services",           # 2
    "home-renovation-services",         # 3
    "pest-control-services",            # 4
    "termite-control-services",         # 5
    "plumbing-services",                # 6
    "electrical-services",              # 7
    "carpenter-services",               # 8
    "ac-services",                      # 9
    "refrigerator-services",            # 10
    "washing-machine-services",         # 11
    "microwave-oven-services",          # 12
    "geyser-services",                  # 13
    "water-purifier-services",          # 14
    "inverter-battery-services",        # 15
    "home-security-systems",            # 16
    "smart-home-automation",            # 17
    "cctv-installation-services",       # 18
    "sofa-cleaning-services",           # 19
    "carpet-cleaning-services",         # 20
    "water-tank-cleaning",              # 21
    "kitchen-chimney-services",         # 22
    "mosquito-net-installation",        # 23
    "wardrobe-installation-services",   # 24
    "false-ceiling-services",           # 25
    "modular-kitchen-services",         # 26
    "interior-design-services",         # 27
    "marble-granite-services",          # 28
    "tile-installation-services",       # 29
    "waterproofing-services",           # 30
    "roofing-contractors",              # 31
    "furniture-repair-services",        # 32
    "glass-facade-installation",        # 33
    "epoxy-flooring-services",          # 34
    "garden-landscaping-services",      # 35
    "terrace-garden-services",          # 36
    "tree-cutting-services",            # 37
    "tanker-water-supply",              # 38
    "water-pump-services",              # 39
    "decoration-services",              # 40
    "catering-services",                # 41
    "event-management-services",        # 42
    "wedding-planning-services",        # 43
    "wedding-photography",              # 44
    "pre-wedding-photography",          # 45
    "corporate-photography",            # 46
    "videography-services",             # 47
    "sound-lighting-services",          # 48
    "yoga-classes",                     # 49
    "gym-fitness-trainers",             # 50

    # ── CATEGORY 2: PROFESSIONAL & LOCAL BUSINESS SERVICES (51–100) ──
    "dental-clinics",                   # 51
    "dermatology-clinics",              # 52
    "eye-hospitals",                    # 53
    "physiotherapy-clinics",            # 54
    "diagnostic-labs",                  # 55
    "hair-transplant-clinics",          # 56
    "ivf-clinics",                      # 57
    "veterinary-clinics",              # 58
    "pet-grooming-services",            # 59
    "pet-boarding-services",            # 60
    "coaching-classes",                 # 61
    "spoken-english-classes",           # 62
    "study-abroad-consultants",         # 63
    "legal-services",                   # 64
    "trademark-registration-services",  # 65
    "iso-certification-consultancy",    # 66
    "gst-consultancy",                  # 67
    "income-tax-consultancy",           # 68
    "company-registration-services",    # 69
    "chartered-accountant-services",    # 70
    "insurance-consultancy",            # 71
    "loan-consultancy-services",        # 72
    "home-loan-consultancy",            # 73
    "personal-loan-consultancy",        # 74
    "mortgage-loan-consultancy",        # 75
    "real-estate-agents",               # 76
    "property-management-services",     # 77
    "property-valuation-services",      # 78
    "property-legal-services",          # 79
    "property-documentation-services",  # 80
    "property-investment-advisory",     # 81
    "security-guard-services",          # 82
    "facility-management-services",     # 83
    "fire-safety-systems",              # 84
    "elevator-maintenance",             # 85
    "escalator-installation",           # 86
    "parking-system-installation",      # 87
    "garbage-collection-contractors",   # 88
    "customs-clearance-agents",         # 89
    "freight-forwarding-services",      # 90
    "export-consultancy",               # 91
    "import-consultancy",               # 92
    "astrology-consultancy",            # 93
    "numerology-consultancy",           # 94
    "personal-training-services",       # 95
    "commercial-property-brokers",      # 96
    "packing-moving-services",          # 97
    "printing-branding-services",       # 98
    "digital-marketing-services",       # 99
    "web-development-services",         # 100

    # ── CATEGORY 3: CONSTRUCTION & INFRASTRUCTURE SERVICES (101–150) ──
    "construction-contractors",         # 101
    "architecture-firms",               # 102
    "construction-project-management",  # 103
    "structural-engineering-services",  # 104
    "construction-safety-consultancy",  # 105
    "building-inspection-services",     # 106
    "building-maintenance-services",    # 107
    "building-demolition-services",     # 108
    "factory-shed-construction",        # 109
    "container-house-construction",     # 110
    "epoxy-flooring-contractors",       # 111
    "false-ceiling-contractors",        # 112
    "waterproofing-contractors",        # 113
    "painting-contractors",             # 114
    "plumbing-contractors",             # 115
    "electrical-contractor-services",   # 116
    "fire-safety-installation",         # 117
    "lift-installation-services",       # 118
    "escalator-maintenance-services",   # 119
    "solar-panel-installation",         # 120
    "ev-charging-installation",         # 121
    "borewell-drilling-services",       # 122
    "aluminium-glass-work",             # 123
    "aluminium-facade-installation",    # 124
    "landscape-architecture-services",  # 125
    "curtain-blinds-installation",      # 126
    "balcony-renovation-services",      # 127
    "cooling-tower-systems",            # 128
    "building-automation-systems",      # 129
    "conveyor-system-installation",     # 130
    "electrical-panel-manufacturing",   # 131
    "generator-installation-services",  # 132
    "effluent-treatment-plants",        # 133
    "energy-audit-consultancy",         # 134
    "commercial-solar-installation",    # 135
    "fire-fighting-system-installation",# 136
    "rainwater-harvesting-services",    # 137
    "road-construction-contractors",    # 138
    "swimming-pool-construction",       # 139
    "commercial-interior-design",       # 140
    "soil-testing-services",            # 141
    "land-survey-services",             # 142
    "office-interior-design",           # 143
    "modular-kitchen-installation",     # 144
    "furniture-manufacturing-services", # 145
    "tile-stone-installation",          # 146
    "vastu-consultancy",                # 147
    "civil-contractors",                # 148
    "commercial-pest-control",          # 149
    "warehouse-construction",           # 150

    # ── CATEGORY 4: INDUSTRIAL & MANUFACTURING SERVICES (151–200) ──
    "cnc-machining-services",           # 151
    "electroplating-services",          # 152
    "anodizing-services",               # 153
    "powder-coating-services",          # 154
    "air-compressor-suppliers",         # 155
    "hydraulic-equipment-suppliers",    # 156
    "pneumatic-equipment-services",     # 157
    "welding-services",                 # 158
    "boiler-services",                  # 159
    "industrial-valve-suppliers",       # 160
    "bearing-dealers",                  # 161
    "rubber-product-manufacturers",     # 162
    "industrial-pump-services",         # 163
    "industrial-gearbox-services",      # 164
    "electric-motor-services",          # 165
    "heat-treatment-services",          # 166
    "sheet-metal-fabrication",          # 167
    "packaging-machinery-services",     # 168
    "textile-machinery-services",       # 169
    "chemical-manufacturing",           # 170
    "plastic-moulding-services",        # 171
    "weighing-scale-services",          # 172
    "industrial-automation-services",   # 173
    "crane-hoist-services",             # 174
    "instrumentation-services",         # 175
    "material-testing-services",        # 176
    "industrial-paint-services",        # 177
    "stainless-steel-fabrication",      # 178
    "lubricant-suppliers",              # 179
    "conveyor-belt-services",           # 180
    "fastener-suppliers",               # 181
    "cable-tray-services",              # 182
    "compressor-parts-services",        # 183
    "tool-room-services",               # 184
    "piping-fitting-suppliers",         # 185
    "industrial-furnace-services",      # 186
    "industrial-cleaning-services",     # 187
    "laser-cutting-services",           # 188
    "water-treatment-services",         # 189
    "industrial-safety-equipment",      # 190
    "packaging-material-suppliers",     # 191
    "solar-energy-services",            # 192
    "hvac-services",                    # 193
    "crane-rental-services",            # 194
    "calibration-services",             # 195
    "transformer-services",             # 196
    "structural-steel-fabrication",     # 197
    "abrasive-grinding-suppliers",      # 198
    "electrical-contracting-services",  # 199
    "3d-printing-services",             # 200
]


def step1_delete_old():
    """Delete all old niche folders, keeping non-niche items."""
    deleted = 0
    kept = 0
    for item in sorted(os.listdir(APP_DIR)):
        if item in KEEP:
            kept += 1
            continue
        path = os.path.join(APP_DIR, item)
        if os.path.isdir(path):
            shutil.rmtree(path)
            deleted += 1
    print(f"DELETED {deleted} old folders (kept {kept} items)")
    return deleted


def step2_create_new(batch_start=0, batch_end=None):
    """Create new niche folders in batches."""
    if batch_end is None:
        batch_end = len(NICHES)
    
    created = 0
    skipped = 0
    for i in range(batch_start, min(batch_end, len(NICHES))):
        slug = NICHES[i]
        path = os.path.join(APP_DIR, slug)
        if os.path.exists(path):
            skipped += 1
            continue
        os.makedirs(path, exist_ok=True)
        created += 1
    
    niche_range = f"{batch_start + 1}-{min(batch_end, len(NICHES))}"
    print(f"BATCH {niche_range}: Created {created} folders (skipped {skipped} existing)")
    return created


def verify():
    """Verify all 200 folders exist."""
    missing = []
    for i, slug in enumerate(NICHES):
        path = os.path.join(APP_DIR, slug)
        if not os.path.isdir(path):
            missing.append(f"  #{i+1}: {slug}")
    
    existing_niches = [d for d in os.listdir(APP_DIR) if os.path.isdir(os.path.join(APP_DIR, d)) and d not in KEEP]
    extra = set(existing_niches) - set(NICHES)
    
    print(f"\nVERIFICATION:")
    print(f"  Total niche folders: {len(existing_niches)}")
    print(f"  Expected: {len(NICHES)}")
    print(f"  Missing: {len(missing)}")
    if missing:
        print("\n".join(missing))
    print(f"  Extra (not in niche list): {len(extra)}")
    if extra:
        for e in sorted(extra):
            print(f"    {e}")
    
    # Check for duplicates in niche list
    dupes = [slug for slug in NICHES if NICHES.count(slug) > 1]
    if dupes:
        print(f"\n  WARNING - Duplicate slugs in list: {set(dupes)}")
    else:
        print(f"  No duplicate slugs ✓")
    
    return len(missing) == 0 and len(extra) == 0


if __name__ == "__main__":
    action = sys.argv[1] if len(sys.argv) > 1 else "all"
    
    if action == "delete":
        step1_delete_old()
    elif action == "create":
        batch = int(sys.argv[2]) if len(sys.argv) > 2 else 0
        step2_create_new(batch * 50, (batch + 1) * 50)
    elif action == "verify":
        verify()
    elif action == "all":
        print("=" * 50)
        print("STEP 1: Deleting old niche folders...")
        print("=" * 50)
        step1_delete_old()
        
        print("\n" + "=" * 50)
        print("STEP 2: Creating new niche folders in batches...")
        print("=" * 50)
        for batch in range(4):
            step2_create_new(batch * 50, (batch + 1) * 50)
        
        print("\n" + "=" * 50)
        print("STEP 3: Verification...")
        print("=" * 50)
        ok = verify()
        
        if ok:
            print("\n✅ ALL 200 NICHE FOLDERS CREATED SUCCESSFULLY!")
        else:
            print("\n❌ ISSUES DETECTED — review above.")
    else:
        print("Usage: python rebuild-folders.py [delete|create [batch]|verify|all]")
