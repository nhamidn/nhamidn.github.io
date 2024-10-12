function onVideoPlay(e) {
    const t = e.target || e,
        o = t.src || t.querySelector("source")?.src,
        n = t.parentNode?.parentNode?.parentNode;
    let r = {};

    if (o && o.startsWith("blob:")) {
        r = {
            videoUrl: o,
            imgUrl: null
        };
    } else {
        r = {
            videoUrl: o,
            imgUrl: null
        };
    }

    console.log(JSON.stringify(r, null, 2));

}

function attachVideoPlayListener(e) {
    if (!e.hasPlayListener) {
        e.addEventListener("play", onVideoPlay);
        e.hasPlayListener = true;

        const t = !e.paused && !e.ended && e.readyState > 2;
        if (t) {
            onVideoPlay({
                target: e
            });
        }
    }
}

function detectPlayingVideos() {
    document.querySelectorAll("video").forEach(e => {
        const t = !e.paused && !e.ended && e.readyState > 2;
        if (t) {
            onVideoPlay({
                target: e
            });
        }
    });
}

function detectVideos() {
    detectPlayingVideos();

    document.querySelectorAll("video").forEach(attachVideoPlayListener);

    new MutationObserver(e => {
        e.forEach(e => {
            e.addedNodes.forEach(e => {
                if ("VIDEO" === e.tagName) {
                    attachVideoPlayListener(e);
                } else if (e.querySelectorAll) {
                    e.querySelectorAll("video").forEach(attachVideoPlayListener);
                }
            });
        });
    }).observe(document.body, {
        childList: true,
        subtree: true
    });
}

detectVideos();
