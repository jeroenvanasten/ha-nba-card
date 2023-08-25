import { html } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";


// Define the rendering function
export function renderIn(c) {
    // Render the HTML template using the provided object `c`
    const htmlTemplate = html`
    <style>
        .card { position: relative; overflow: hidden; padding: 16px 16px 20px; font-weight: 400; border-radius: var(--ha-card-border-radius, 10px); }
        .title { text-align: center; font-size: 1.2em; font-weight: 500; }
        .team-bg { opacity: 0.08; position: absolute; top: -20%; left: -20%; width: 58%; z-index: 0; }
        .opponent-bg { opacity: 0.08; position: absolute; top: -20%; right: -20%; width: 58%; z-index: 0; }
        .card-content { display: flex; justify-content: space-evenly; align-items: center; text-align: center; position: relative; z-index: 1; }
        .team { text-align: center; width: 35%; }
        .team img { max-width: 90px; }
        .logo { max-height: 5em; }
        .circle { display:${c.initialsDisplay}; width: 1em; height: 1em; padding: 10px; line-height: 3em; border: 2px solid gray; border-radius: 50%; font-size: 2em; color: white; text-align: center; background: black }
        .score { font-size: ${c.scoreSize}; text-align: center; }
        .divider { font-size: 2.5em; text-align: center; margin: 0 4px; }
        .name { font-size: 1.5em; font-weight: bold; }
        .rank { font-size:0.8em; display: ${c.rankDisplay}; }
        .record { font-size:1.0em; height 1.0em; }
        .line1 { height: 1px; background-color: var(--primary-text-color); margin:10px 0; }
        .line2 { height: 1px; background-color: var(--primary-text-color); margin:10px 0; }
        .last-play { font-size: 1.2em; width: 100%; white-space: nowrap; overflow: hidden; box-sizing: border-box; }
        .last-play p { display: inline-block; padding-left: 100%; margin: 2px 0 12px; animation : slide ${c.lastPlaySpeed}s linear infinite; }
        @keyframes slide { 0%   { transform: translate(0, 0); } 100% { transform: translate(-100%, 0); } }
        .down-distance { text-align: right; }
        .play-clock { font-size: 1.4em; height: 1.4em; text-align: center; }
    </style>
    <ha-card>
        <div class="card">
            <div class="title">${c.title}</div>
            <img class="team-bg" src="${c.logoBG[1]}" />
            <img class="opponent-bg" src="${c.logoBG[2]}" />
            <div class="card-content">
                <div class="team">
                    <img class="logo" src="${c.logo[1]}" />
                    <div class="circle">${c.initials[1]}</div>
                    <div class="name"><span class="rank"></span> ${c.name[1]}</div>
                </div>
                <div class="score">---</div>
                <div class="divider">&nbsp&nbsp&nbsp</div>
                <div class="score">---</div>
                <div class="team">
                    <img class="logo" src="${c.logo[2]}" />
                    <div class="circle">${c.initials[2]}</div>
                    <div class="name"><span class="rank"></span> ${c.name[2]}</div>
                </div>
            </div>
            <div class="play-clock">${c.playClock}</div>
            <div class="line1"></div>
            <div class="in-row1">
                <div class="venue">${c.venue}</div>
                <div class="location">${c.location}</div>
            </div>
            <div class="line2"></div>
            <div class="last-play">
                <p>${c.lastPlay}</p>
            </div>
        </div>
    </ha-card>
    `;    // Return the HTML template
    return htmlTemplate;
}