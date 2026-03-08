#!/bin/bash
# Auto-push 5% of files every 1 minute
# Usage: bash scripts/auto-push-5percent.sh

cd "/Applications/VADODARA EXPERTS" || exit 1

TOTAL_FILES=20262
BATCH_SIZE=$(( TOTAL_FILES * 5 / 100 ))  # ~1013 files per batch
BATCH_NUM=1

echo "=== Auto Push Script ==="
echo "Total files: $TOTAL_FILES"
echo "Batch size target: ~$BATCH_SIZE files (5%)"
echo "Interval: 60 seconds"
echo "========================"
echo ""

while true; do
    # Get list of untracked app directories (not yet in git)
    UNTRACKED_DIRS=()
    while IFS= read -r dir; do
        UNTRACKED_DIRS+=("$dir")
    done < <(comm -23 <(ls -d app/*/ 2>/dev/null | sed 's|/$||' | sort) <(git ls-files app/ | awk -F/ '{print $1"/"$2}' | sort -u))

    # If no more directories to add, we're done
    if [ ${#UNTRACKED_DIRS[@]} -eq 0 ]; then
        echo ""
        echo "✅ ALL FILES PUSHED! Nothing left to add."
        FINAL_COUNT=$(git ls-files | wc -l | tr -d ' ')
        echo "Total files in repo: $FINAL_COUNT"
        break
    fi

    echo "--- Batch $BATCH_NUM | $(date '+%H:%M:%S') ---"
    echo "Remaining untracked directories: ${#UNTRACKED_DIRS[@]}"

    # Add directories until we hit the batch size
    FILES_ADDED=0
    DIRS_ADDED=0
    DIRS_IN_BATCH=()

    for dir in "${UNTRACKED_DIRS[@]}"; do
        if [ $FILES_ADDED -ge $BATCH_SIZE ]; then
            break
        fi

        # Count files in this directory
        DIR_FILES=$(find "$dir" -type f 2>/dev/null | wc -l | tr -d ' ')

        if [ "$DIR_FILES" -gt 0 ]; then
            git add "$dir/" 2>/dev/null
            FILES_ADDED=$(( FILES_ADDED + DIR_FILES ))
            DIRS_ADDED=$(( DIRS_ADDED + 1 ))
            DIRS_IN_BATCH+=("$(basename "$dir")")
        fi
    done

    if [ $FILES_ADDED -eq 0 ]; then
        echo "No files to add in this batch, skipping..."
        sleep 60
        continue
    fi

    # Calculate current percentage
    CURRENT_TOTAL=$(git ls-files | wc -l | tr -d ' ')
    PERCENTAGE=$(echo "scale=1; $CURRENT_TOTAL * 100 / $TOTAL_FILES" | bc)

    # Commit and push
    git commit -m "Batch $BATCH_NUM: Add $DIRS_ADDED niches (+$FILES_ADDED files, now ${PERCENTAGE}%)" >/dev/null 2>&1

    echo "Added $DIRS_ADDED directories ($FILES_ADDED files)"
    echo "Total in repo: $CURRENT_TOTAL files ($PERCENTAGE%)"
    echo "Pushing to GitHub..."

    if git push origin main 2>&1 | tail -2; then
        echo "✅ Batch $BATCH_NUM pushed successfully!"
    else
        echo "❌ Push failed! Retrying in 60 seconds..."
    fi

    BATCH_NUM=$(( BATCH_NUM + 1 ))
    REMAINING=${#UNTRACKED_DIRS[@]}
    REMAINING=$(( REMAINING - DIRS_ADDED ))

    if [ $REMAINING -le 0 ]; then
        echo ""
        echo "✅ ALL FILES PUSHED!"
        break
    fi

    echo "Waiting 60 seconds before next batch..."
    echo ""
    sleep 60
done

echo ""
echo "=== Script Complete ==="
echo "Final file count: $(git ls-files | wc -l | tr -d ' ')"
echo "Total batches: $(( BATCH_NUM - 1 ))"
