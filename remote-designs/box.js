export const boxRemote = {
  id: 'box',
  label: 'Box',
  defaultName: 'Fenda Sound Box',
  controls: [
    { key: 'power', label: 'Power', type: 'entity' },
    { key: 'mute', label: 'Mute', type: 'entity' },
    { key: 'light', label: 'Light', type: 'entity' },
    { key: 'bluetooth', label: 'Bluetooth', type: 'entity' },
    { key: 'usb', label: 'USB', type: 'entity' },
    { key: 'aux', label: 'AUX', type: 'entity' },
    { key: 'volume_up', label: 'Volume +', type: 'entity' },
    { key: 'volume_down', label: 'Volume -', type: 'entity' },
    { key: 'previous', label: 'Previous', type: 'entity' },
    { key: 'play_pause', label: 'Play / Pause', type: 'entity' },
    { key: 'next', label: 'Next', type: 'entity' },
    { key: 'preset_1', label: 'Preset 1 Action', type: 'entity' },
    { key: 'preset_1_label', label: 'Preset 1 Name', type: 'text' },
    { key: 'preset_2', label: 'Preset 2 Action', type: 'entity' },
    { key: 'preset_2_label', label: 'Preset 2 Name', type: 'text' },
  ],
  render(ctx) {
    const p1 = ctx.escape(ctx.room.preset_1_label || ctx.room.actions?.preset_1_label || 'P1');
    const p2 = ctx.escape(ctx.room.preset_2_label || ctx.room.actions?.preset_2_label || 'P2');
    return `
      <style>
        .box-remote{width:100%;max-width:500px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:var(--text)}
        .box-remote *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
        .box-shell{padding:14px;border-radius:28px;background:linear-gradient(145deg,var(--c1),var(--c2));border:1px solid var(--border);box-shadow:inset 0 1px 0 var(--border),0 14px 30px var(--shadow)}
        .box-button{border:0;background:var(--button);color:var(--button-text);box-shadow:0 7px 16px var(--shadow);cursor:pointer;transition:transform .1s,box-shadow .1s,filter .1s!important;font:inherit;font-weight:750}
        .box-button:active{transform:translateY(2px)!important;box-shadow:0 3px 8px var(--shadow),inset 0 2px 5px var(--shadow)!important;filter:brightness(.96)!important}
        .box-top{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px}
        .box-top .box-button{height:50px;border-radius:25px;font-size:14px;letter-spacing:.4px}
        .box-power{color:#ff5b62!important}
        .box-stage{position:relative;height:294px;margin:0 0 12px}
        .box-stage::before{content:"";position:absolute;left:50%;top:50%;width:74%;height:74%;border:1px solid color-mix(in srgb,var(--border) 55%,transparent);border-radius:50%;transform:translate(-50%,-50%);pointer-events:none}
        .box-source{position:absolute;z-index:2;width:66px;height:66px;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;font-size:11px;line-height:1.05;letter-spacing:.2px}
        .box-source .source-icon{font-size:21px;line-height:1;font-weight:800}.box-source .source-label{font-size:10px;font-weight:800}
        .box-light{left:5%;top:5%}.box-bt{right:5%;top:5%}.box-usb{left:5%;bottom:5%}.box-aux{right:5%;bottom:5%}
        .box-control{position:absolute;z-index:3;left:50%;top:50%;transform:translate(-50%,-50%);display:grid;grid-template-columns:82px 102px 82px;grid-template-rows:60px 72px 60px;gap:9px;align-items:stretch}
        .box-vol-up{grid-column:2;grid-row:1;border-radius:25px!important;font-size:29px;line-height:1}.box-prev{grid-column:1;grid-row:2;border-radius:21px!important;font-size:25px}.box-play{grid-column:2;grid-row:2;border-radius:50%!important;font-size:23px;width:72px;height:72px;justify-self:center}.box-next{grid-column:3;grid-row:2;border-radius:21px!important;font-size:25px}.box-vol-down{grid-column:2;grid-row:3;border-radius:25px!important;font-size:29px;line-height:1}
        .box-presets{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding-top:12px;border-top:1px solid var(--border)}.box-preset{height:56px;border-radius:20px;font-size:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 14px}
        @media(max-width:430px){.box-shell{padding:11px;border-radius:24px}.box-top{gap:8px;margin-bottom:10px}.box-top .box-button{height:46px}.box-stage{height:270px;margin-bottom:10px}.box-stage::before{width:76%;height:76%}.box-source{width:60px;height:60px}.box-source .source-icon{font-size:19px}.box-source .source-label{font-size:9px}.box-light{left:2%;top:4%}.box-bt{right:2%;top:4%}.box-usb{left:2%;bottom:4%}.box-aux{right:2%;bottom:4%}.box-control{grid-template-columns:74px 90px 74px;grid-template-rows:56px 66px 56px;gap:8px}.box-vol-up,.box-vol-down{font-size:26px}.box-prev,.box-next{font-size:22px}.box-play{width:66px;height:66px;font-size:20px}.box-preset{height:52px;font-size:14px}}
      </style>
      <div class="box-remote"><div class="box-shell">
        <div class="box-top"><button class="box-button box-power" data-action="power">⏻ &nbsp; POWER</button><button class="box-button" data-action="mute">🔇 &nbsp; MUTE</button></div>
        <div class="box-stage">
          <button class="box-button box-source box-light" data-action="light"><span class="source-icon">💡</span><span class="source-label">LIGHT</span></button>
          <button class="box-button box-source box-bt" data-action="bluetooth"><span class="source-icon">BT</span><span class="source-label">BT</span></button>
          <button class="box-button box-source box-usb" data-action="usb"><span class="source-icon">▣</span><span class="source-label">USB</span></button>
          <button class="box-button box-source box-aux" data-action="aux"><span class="source-icon">⌁</span><span class="source-label">AUX</span></button>
          <div class="box-control"><button class="box-button box-vol-up" data-action="volume_up">＋</button><button class="box-button box-prev" data-action="previous">⏮</button><button class="box-button box-play" data-action="play_pause">▶❚❚</button><button class="box-button box-next" data-action="next">⏭</button><button class="box-button box-vol-down" data-action="volume_down">−</button></div>
        </div>
        <div class="box-presets"><button class="box-button box-preset" data-action="preset_1">${p1}</button><button class="box-button box-preset" data-action="preset_2">${p2}</button></div>
      </div></div>`;
  },
};
