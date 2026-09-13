---
permalink: /
title: "Md. Rifat Hossen"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

---

<!-- permalink: /
title: "Md. Rifat Hossen"
author_profile: true
redirect_from:

- /about/
- /about.html

--- -->

<div align="justify"> With over 1.5+ years of research experience in Deep Learning and Machine Learning, I specialize in Computer Vision, Speech and Facial Emotion Recognition, Precision Agriculture, and AI applications in healthcare. I am currently a <b> Final Year undergraduate student in Information and Communication Engineering at Pabna University of Science and Technology.</b> My academic journey is driven by a strong interest in artificial intelligence, machine learning, and intelligent systems. In addition to my research activities, my background in competitive programming on platforms such as LeetCode and Codeforces has strengthened my analytical thinking and problem-solving abilities.
 <br></div>
<button class = "btn" onclick="window.location.href='https://mdrifat-hossen.github.io/publications/';">View Publications</button> <button class = "btn" onclick="window.location.href='https://mdrifat-hossen.github.io/projects/';">View Projects</button> <button class = "btn" onclick="window.location.href='https://mdrifat-hossen.github.io/portfolio/';">View Portfolio</button>
<button class = "btn" onclick="window.location.href='https://mdrifat-hossen.github.io/files/CV_Rifat.pdf';">Download CV</button>
<button class = "btn" onclick="window.location.href='https://mdrifat-hossen.github.io/portfolio/Aspire/';">Alumni of Aspire Leadership program</button>

## Experience

- **Research Assistant** <button class = "btn" onclick="window.location.href='';">Lab</button>
  - NURO Research LAB· Part-time
  - Mar 2026 – Present\*
- **Research Assistant**
  - Dept. of ICE, Pabna University of Science and Technology · Part-time
  - Dec 2024 – Present\*
- **Research Trainee**
  - Learnify Research Lab · Part-time
  - Mar 2025 – Mar 2026
- **Research Assistant** <button class = "btn" onclick="window.location.href='https://sites.google.com/view/credit-lab/home';">Lab</button>
  - CREDIT Lab, Department of EEE, Green University
  - Jun 2025 – Dec 2025

## Academic

1. **B.Sc. (Engineering) in ICE**
   · Dept. of Information and Communication Engineering, Pabna University of Science and Technology, Pabna, Bangladesh.

- _CGPA: 3.69 out of 4.00 (after 6 semesters; remaining 2 semesters)_

2. **Higher Secondary School Certificate**
   · Alamgir Monsur Memorial College (AMMC), Mymensingh · 2021

- _GPA: 4.92 out of 5.00_

3. **Secondary School Certificate**
   · Shontospur High School (SHS), Fulbaria, Mymensingh · 2019

- _GPA: 4.61 out of 5.00_

<h3> Biography </h3>

<div align="justify">
Md. Rifat Hossen has over three years of research experience in Deep Learning and Machine Learning, specializing in Computer Vision tasks like image classification, transformation, and segmentation. He is currently studying for a Bachelor’s degree in Information and Communication Engineering (ICE) at Pabna University of Science and Technology (PUST), Bangladesh, and has kept an excellent academic record.
His research interests include Computer Vision, Image Processing, Deep Learning, Machine Learning, and applied AI fields like Precision Agriculture and Healthcare, such as Speech and Facial Emotion Recognition. He is actively engaged in research projects and has contributed to academic publications for conferences and journals.
<br>
In 2024, he actively took part in idea showcasing programs, highlighting his innovation and problem-solving abilities. He has solved over 250 problems on LeetCode and more than 500 across various competitive programming platforms. Additionally, he participated in international conferences, where he also acted as a reviewer, gaining valuable experience in assessing academic research.
<br>
He has also participated in intra-university competitive programming contests, which enhanced his algorithmic and analytical abilities. Additionally, he received a financial grant from the Aspire Leadership Program, managed by Harvard Business School, to support his interests in entrepreneurship and leadership development.

<br>
His dedication to academics and extracurricular activities demonstrates a strong commitment to research excellence, leadership, and creating impactful AI solutions for real-world issues.
</div>

<!-- =====================================================
     LATEST NEWS — Dynamic Academic News Ticker
====================================================== -->

<section class="latest-news-section" id="latest-news">

  <!-- Header -->
  <div class="latest-news-header">

    <div class="latest-news-heading">
      <span class="latest-news-icon">📰</span>
      <span>Latest News</span>
    </div>

    <span class="latest-news-badge">
      LATEST
    </span>

  </div>

  <!-- News Window -->
  <div class="latest-news-window" id="latestNewsWindow">

    <div class="latest-news-track" id="latestNewsTrack">

      {% for news in site.data.news %}

      <a
        href="{{ news.url | relative_url }}"
        class="latest-news-item"
        tabindex="0"
      >

        <!-- Date -->
        <span class="latest-news-date">
          {{ news.date }}
        </span>

        <!-- Separator -->
        <span class="latest-news-separator">•</span>

        <!-- News -->
        <span class="latest-news-text">
          {{ news.title }}
        </span>

        <!-- NEW Badge -->
        <span class="latest-news-new">
          <span class="new-dot"></span>
          NEW
        </span>

        <!-- Arrow -->
        <span class="latest-news-arrow">
          ↗
        </span>

      </a>

      {% endfor %}

    </div>

  </div>

</section>

<style>

/* =====================================================
   LATEST NEWS CONTAINER
====================================================== */

.latest-news-section{

  max-width:950px;

  margin:45px auto 35px;

  background:#ffffff;

  border:1px solid #e5e7eb;

  border-radius:16px;

  overflow:hidden;

  box-shadow:
    0 8px 28px rgba(16,24,40,0.06);

}


/* =====================================================
   HEADER
====================================================== */

.latest-news-header{

  display:flex;

  align-items:center;

  justify-content:space-between;

  padding:14px 20px;

  background:#fafbfc;

  border-bottom:1px solid #edf0f4;

}


.latest-news-heading{

  display:flex;

  align-items:center;

  gap:9px;

  font-size:17px;

  font-weight:700;

  color:#1f2937;

}


.latest-news-icon{

  font-size:20px;

}


/* Header Badge */

.latest-news-badge{

  font-size:10px;

  font-weight:700;

  letter-spacing:1px;

  padding:5px 10px;

  border-radius:20px;

  background:#eef2f6;

  color:#667085;

}


/* =====================================================
   NEWS WINDOW
====================================================== */

.latest-news-window{

  position:relative;

  height:62px;

  overflow:hidden;

}


/* =====================================================
   TRACK
====================================================== */

.latest-news-track{

  position:relative;

  width:100%;

}


/* =====================================================
   NEWS ITEM
====================================================== */

.latest-news-item{

  position:absolute;

  left:0;

  top:0;

  width:100%;

  min-height:62px;

  padding:0 20px;

  display:flex;

  align-items:center;

  gap:11px;

  text-decoration:none !important;

  color:#344054;

  background:#ffffff;

  opacity:0;

  transform:translateY(100%);

  transition:
    transform .65s ease,
    opacity .65s ease,
    background .2s ease;

}


/* Active */

.latest-news-item.is-active{

  opacity:1;

  transform:translateY(0);

  z-index:2;

}


/* Leaving */

.latest-news-item.is-leaving{

  opacity:0;

  transform:translateY(-100%);

  z-index:1;

}


/* =====================================================
   DATE
====================================================== */

.latest-news-date{

  flex-shrink:0;

  font-size:12px;

  font-weight:600;

  color:#667085;

  white-space:nowrap;

}


/* =====================================================
   SEPARATOR
====================================================== */

.latest-news-separator{

  flex-shrink:0;

  font-size:18px;

  color:#98a2b3;

}


/* =====================================================
   NEWS TEXT
====================================================== */

.latest-news-text{

  flex:1;

  min-width:0;

  font-size:14px;

  line-height:1.5;

  white-space:nowrap;

  overflow:hidden;

  text-overflow:ellipsis;

}


/* =====================================================
   NEW BADGE — GREEN
====================================================== */

.latest-news-new{

  flex-shrink:0;

  display:inline-flex;

  align-items:center;

  gap:4px;

  padding:5px 8px;

  border-radius:6px;

  font-size:9px;

  font-weight:800;

  letter-spacing:.8px;

  background:#e8f7ee;

  color:#198754;

  border:1px solid #bde5cb;

  box-shadow:
    0 2px 7px rgba(25,135,84,.12);

  animation:
    latestNewsNewJump
    1.8s
    ease-in-out
    infinite;

}


/* =====================================================
   NEW BADGE JUMPING ANIMATION
====================================================== */

@keyframes latestNewsNewJump{

  0%,
  100%{
    transform:translateY(0);
  }

  10%{
    transform:translateY(-4px);
  }

  20%{
    transform:translateY(0);
  }

  30%{
    transform:translateY(-2px);
  }

  40%{
    transform:translateY(0);
  }

  100%{
    transform:translateY(0);
  }

}


/* =====================================================
   GREEN DOT
====================================================== */

.new-dot{

  display:inline-block;

  width:6px;

  height:6px;

  flex-shrink:0;

  border-radius:50%;

  background:#198754;

  box-shadow:
    0 0 0 2px rgba(25,135,84,.10);

  animation:
    newDotPulse
    1.4s
    ease-in-out
    infinite;

}


/* Dot Pulse */

@keyframes newDotPulse{

  0%,
  100%{
    opacity:1;
    transform:scale(1);
  }

  50%{
    opacity:.45;
    transform:scale(.75);
  }

}


/* Hover করলে একটু বেশি noticeable */

.latest-news-item:hover .latest-news-new{

  animation-duration:.9s;

}


/* =====================================================
   ARROW
====================================================== */

.latest-news-arrow{

  flex-shrink:0;

  font-size:16px;

  color:#98a2b3;

  transition:
    transform .2s ease,
    color .2s ease;

}


.latest-news-item:hover .latest-news-arrow{

  transform:
    translate(3px,-3px);

  color:#344054;

}


/* =====================================================
   HOVER
====================================================== */

.latest-news-item:hover{

  background:#f8fafc;

}


/* =====================================================
   HINT
====================================================== */

.latest-news-hint{

  text-align:center;

  padding:6px 15px 9px;

  font-size:10px;

  color:#98a2b3;

  opacity:.85;

}


/* =====================================================
   TABLET
====================================================== */

@media(max-width:900px){

  .latest-news-item{

    cursor:pointer;

  }

  .latest-news-text{

    white-space:nowrap;

    overflow:hidden;

    text-overflow:ellipsis;

  }

}


/* =====================================================
   TABLET / MOBILE
   TAP = FULL TEXT
====================================================== */

@media(max-width:900px){

  .latest-news-window{

    height:62px;

    overflow:visible;

  }


  .latest-news-item.is-expanded{

    min-height:62px;

    height:auto;

    padding-top:14px;

    padding-bottom:14px;

    align-items:flex-start;

    background:#f8fafc;

    z-index:20;

  }


  .latest-news-item.is-expanded
  .latest-news-text{

    white-space:normal;

    overflow:visible;

    text-overflow:clip;

    word-break:normal;

    overflow-wrap:anywhere;

  }


  .latest-news-item.is-expanded
  .latest-news-arrow{

    transform:
      translate(2px,-2px);

  }


  .latest-news-hint{

    display:block;

  }

}


/* =====================================================
   SMALL MOBILE
====================================================== */

@media(max-width:600px){

  .latest-news-section{

    margin:35px 10px 30px;

    border-radius:13px;

  }


  .latest-news-header{

    padding:12px 15px;

  }


  .latest-news-heading{

    font-size:16px;

  }


  .latest-news-icon{

    font-size:18px;

  }


  .latest-news-badge{

    font-size:9px;

    padding:4px 8px;

  }


  .latest-news-window{

    height:60px;

  }


  .latest-news-item{

    min-height:60px;

    padding:0 14px;

    gap:8px;

  }


  .latest-news-date{

    font-size:10px;

  }


  .latest-news-text{

    font-size:13px;

  }


  .latest-news-new{

    display:none;

  }


  .latest-news-arrow{

    font-size:14px;

  }

}


/* =====================================================
   ACCESSIBILITY
====================================================== */

@media(prefers-reduced-motion:reduce){

  .latest-news-item{

    transition:none;

  }

  .latest-news-new,
  .new-dot{

    animation:none;

  }

}

</style>

<script>

/* =====================================================
   DYNAMIC LATEST NEWS TICKER
====================================================== */

(function(){

  const section =
    document.getElementById("latest-news");

  if(!section) return;


  const track =
    document.getElementById("latestNewsTrack");


  const items =
    Array.from(
      track.querySelectorAll(
        ".latest-news-item"
      )
    );


  /* -----------------------------------------------
     No News
  ------------------------------------------------ */

  if(items.length === 0){

    section.style.display = "none";

    return;

  }


  /* -----------------------------------------------
     Only One News
  ------------------------------------------------ */

  if(items.length === 1){

    items[0].classList.add(
      "is-active"
    );

    return;

  }


  let current = 0;

  let timer = null;

  let paused = false;


  /*
     How long each news stays visible
  */

  const DISPLAY_TIME = 4500;


  /* -----------------------------------------------
     Show News
  ------------------------------------------------ */

  function showNews(index){

    items.forEach(function(item){

      item.classList.remove(
        "is-active",
        "is-leaving"
      );

    });


    const previous =
      items[current];


    const next =
      items[index];


    if(
      previous &&
      previous !== next
    ){

      previous.classList.add(
        "is-leaving"
      );

    }


    next.classList.add(
      "is-active"
    );


    current = index;

  }


  /* -----------------------------------------------
     Next News
  ------------------------------------------------ */

  function nextNews(){

    if(paused) return;


    const nextIndex =
      (current + 1) % items.length;


    showNews(nextIndex);

  }


  /* -----------------------------------------------
     Start
  ------------------------------------------------ */

  function startTicker(){

    stopTicker();


    timer =
      setInterval(
        nextNews,
        DISPLAY_TIME
      );

  }


  /* -----------------------------------------------
     Stop
  ------------------------------------------------ */

  function stopTicker(){

    if(timer){

      clearInterval(timer);

      timer = null;

    }

  }


  /* -----------------------------------------------
     Start Ticker
  ------------------------------------------------ */

  showNews(0);

  startTicker();


  /* -----------------------------------------------
     Desktop Hover = Pause
  ------------------------------------------------ */

  section.addEventListener(
    "mouseenter",
    function(){

      paused = true;

      stopTicker();

    }
  );


  section.addEventListener(
    "mouseleave",
    function(){

      paused = false;

      startTicker();

    }
  );


  /* -----------------------------------------------
     Tablet / Mobile Tap
     First tap = Full Text
  ------------------------------------------------ */

  items.forEach(function(item){

    item.addEventListener(
      "click",
      function(event){

        if(window.innerWidth <= 900){

          /*
             First tap expands the news
          */

          if(
            !item.classList.contains(
              "is-expanded"
            )
          ){

            event.preventDefault();


            items.forEach(
              function(other){

                other.classList.remove(
                  "is-expanded"
                );

              }
            );


            item.classList.add(
              "is-expanded"
            );


            paused = true;

            stopTicker();

          }

        }

      }
    );


    /* ---------------------------------------------
       Keyboard Accessibility
    --------------------------------------------- */

    item.addEventListener(
      "focus",
      function(){

        paused = true;

        stopTicker();

      }
    );


    item.addEventListener(
      "blur",
      function(){

        if(window.innerWidth > 900){

          paused = false;

          startTicker();

        }

      }
    );

  });


  /* -----------------------------------------------
     Click Outside = Close Expanded News
  ------------------------------------------------ */

  document.addEventListener(
    "click",
    function(event){

      if(
        !section.contains(
          event.target
        )
      ){

        items.forEach(
          function(item){

            item.classList.remove(
              "is-expanded"
            );

          }
        );


        if(window.innerWidth <= 900){

          paused = false;

          startTicker();

        }

      }

    }
  );


})();

</script>

<div style="text-align:center; margin:30px auto;">

  <h4 style="font-size:18px; color:#555; margin-bottom:15px;">
    🌍 Global Visitors
  </h4>

  <a href="https://info.flagcounter.com/g2gH">
    <img src="https://s05.flagcounter.com/count2/g2gH/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_1/flags_0/percent_0/"
         alt="Flag Counter"
         style="max-width:300px; width:100%; height:auto;">
  </a>

</div>
