.heart {
    position: relative;
    width: 320px;
    height: 300px;
    background: transparent;
    transform: none;
    animation: heartbeat 2s ease-in-out infinite;
    box-shadow: none;
}

.love-word {
    position: absolute;
    transform: translate(-50%, -50%);
    color: #ea80b0;
    font-size: 11px;
    font-weight: 600;
    white-space: nowrap;
    text-shadow:
        0 0 5px #ea80b0,
        0 0 10px rgba(255, 255, 255, 0.5);
    opacity: 0;
    animation: appear 2s ease-in-out infinite;
}

@keyframes appear {
    0% {
        opacity: 0.15;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0.15;
    }
}

@keyframes heartbeat {
    0%, 100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.04);
    }
}