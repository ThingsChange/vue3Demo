function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
        const deduped = [...new Set(pendingPostFlushCbs)]
        pendingPostFlushCbs.length = 0
        // #1947 already has active queue, nested flushPostFlushCbs call
        if (activePostFlushCbs) {
            activePostFlushCbs.push(...deduped)
            return
        }
        activePostFlushCbs = deduped
        activePostFlushCbs.sort((a, b) => getId(a) - getId(b))
        for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
            activePostFlushCbs[postFlushIndex]()
        }
        activePostFlushCbs = null
        postFlushIndex = 0
    }
}
