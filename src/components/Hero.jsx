import React, {
  useEffect,
  useRef,
  useState
} from "react";

import "../styles/hero.css";

import img1 from "../assets/offer1.png";
import img2 from "../assets/offer2.png";
import img3 from "../assets/offer3.png";

export default function Hero() {

  /* =========================
     IMAGES
  ========================= */

  const images = [
    img1,
    img2,
    img3,
    img1,
    img2,
    img3
  ];

  /* =========================
     REFS
  ========================= */

  const trackRef = useRef(null);

  const isDown = useRef(false);

  const startX = useRef(0);

  const scrollLeft = useRef(0);

  const moved = useRef(false);

  const autoRun = useRef(null);

  const clickTimer = useRef(null);

  const popupDrag = useRef(false);

  const popupStart = useRef({
    x: 0,
    y: 0
  });

  /* =========================
     STATES
  ========================= */

  const [popup, setPopup] =
    useState(false);

  const [activeImg, setActiveImg] =
    useState(null);

  const [zoom, setZoom] =
    useState(1);

  const [position, setPosition] =
    useState({
      x: 0,
      y: 0
    });

  /* =========================
     AUTO RUN
  ========================= */

  useEffect(() => {

    let running = true;

    const track = trackRef.current;

    const run = () => {

      if (!running) return;

      if (
        track &&
        !isDown.current
      ) {

        track.scrollLeft += 0.7;

        const maxScroll =
  track.scrollWidth -
  track.clientWidth;

if (track.scrollLeft >= maxScroll / 2) {

  track.scrollLeft = 0;
}
      }

      autoRun.current =
        requestAnimationFrame(run);
    };

    run();

    return () => {

      running = false;

      cancelAnimationFrame(
        autoRun.current
      );
    };

  }, []);

  /* =========================
     DRAG START
  ========================= */

  const dragStart = (e) => {

    isDown.current = true;

    moved.current = false;

    startX.current =
      e.pageX ||
      e.touches[0].pageX;

    scrollLeft.current =
      trackRef.current.scrollLeft;
  };

  /* =========================
     DRAG MOVE
  ========================= */

  const dragMove = (e) => {

    if (!isDown.current) return;

    e.preventDefault();

    const x =
      e.pageX ||
      e.touches[0].pageX;

    const walk =
      (x - startX.current) * 1.5;

    if (Math.abs(walk) > 5) {

      moved.current = true;
    }

    trackRef.current.scrollLeft =
      scrollLeft.current - walk;
  };

  /* =========================
     DRAG END
  ========================= */

  const dragEnd = () => {

    setTimeout(() => {

      isDown.current = false;

    }, 50);
  };

  /* =========================
     DOUBLE TAP MOBILE
  ========================= */

  const handleTap = (img) => {

    if (moved.current) return;

    if (clickTimer.current) {

      clearTimeout(
        clickTimer.current
      );

      clickTimer.current = null;

      setPopup(true);

      setActiveImg(img);

    } else {

      clickTimer.current =
        setTimeout(() => {

          clickTimer.current = null;

        }, 250);
    }
  };

  /* =========================
     ZOOM
  ========================= */

  const toggleZoom = (e) => {

    e.stopPropagation();

    if (zoom === 1) {

      setZoom(2.5);

    } else {

      setZoom(1);

      setPosition({
        x: 0,
        y: 0
      });
    }
  };

  /* =========================
     POPUP DRAG START
  ========================= */

  const popupDragStart = (e) => {

    if (zoom === 1) return;

    popupDrag.current = true;

    popupStart.current = {

      x:
        e.pageX ||
        e.touches[0].pageX,

      y:
        e.pageY ||
        e.touches[0].pageY
    };
  };

  /* =========================
     POPUP DRAG MOVE
  ========================= */

  const popupDragMove = (e) => {

    if (
      !popupDrag.current ||
      zoom === 1
    ) return;

    e.preventDefault();

    const x =
      e.pageX ||
      e.touches[0].pageX;

    const y =
      e.pageY ||
      e.touches[0].pageY;

    const moveX =
      x - popupStart.current.x;

    const moveY =
      y - popupStart.current.y;

    popupStart.current = {
      x,
      y
    };

    setPosition((prev) => ({

      x: prev.x + moveX,

      y: prev.y + moveY

    }));
  };

  /* =========================
     POPUP DRAG END
  ========================= */

  const popupDragEnd = () => {

    popupDrag.current = false;
  };

  /* =========================
     CLOSE POPUP
  ========================= */

  const closePopup = () => {

    setPopup(false);

    setZoom(1);

    setPosition({
      x: 0,
      y: 0
    });
  };

  return (

    <section className="hero">

      {/* TOP GLOW */}

      <div className="hero-glow-top"></div>

      {/* MAIN */}

      <div className="hero-container">

        <div
          className="hero-track"
          ref={trackRef}

          onMouseDown={dragStart}
          onMouseMove={dragMove}
          onMouseUp={dragEnd}
          onMouseLeave={dragEnd}

          onTouchStart={dragStart}
          onTouchMove={dragMove}
          onTouchEnd={dragEnd}
        >

          {[...images, ...images].map(
            (img, index) => (

              <div
                className="hero-item"
                key={index}

                onDoubleClick={(e) => {

                  e.stopPropagation();

                  if (moved.current) return;

                  setPopup(true);

                  setActiveImg(img);
                }}

                onTouchEnd={(e) => {

                  e.stopPropagation();

                  handleTap(img);
                }}
              >

                <img
                  src={img}
                  alt="banner"

                  draggable="false"

                  onClick={(e) => {

                    e.preventDefault();

                    e.stopPropagation();
                  }}
                />

              </div>
            )
          )}

        </div>

      </div>

      {/* BOTTOM GLOW */}

      <div className="hero-glow-bottom"></div>

      {/* =========================
          POPUP
      ========================= */}

      {popup && (

        <div
          className="popup"
          onClick={closePopup}
        >

          <img
            src={activeImg}
            alt="popup"

            className="popup-img"

            draggable="false"

            style={{

              transform:
                `translate(${position.x}px, ${position.y}px) scale(${zoom})`
            }}

            onClick={toggleZoom}

            onMouseDown={
              popupDragStart
            }

            onMouseMove={
              popupDragMove
            }

            onMouseUp={
              popupDragEnd
            }

            onMouseLeave={
              popupDragEnd
            }

            onTouchStart={
              popupDragStart
            }

            onTouchMove={
              popupDragMove
            }

            onTouchEnd={
              popupDragEnd
            }
          />

        </div>

      )}

    </section>
  );
}