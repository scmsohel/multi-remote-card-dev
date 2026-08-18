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
        .box-source-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-bottom:14px}
        .box-source{height:56px;border-radius:20px;font-size:12px;display:flex;align-items:center;justify-content:center;gap:5px}
        .box-icon{font-size:20px;line-height:1}
        .box-control{display:grid;grid-template-columns:1fr 1.12fr 1fr;grid-template-rows:70px 76px 70px;gap:10px;align-items:stretch;margin:0 0 14px}
        .box-vol-up{grid-column:2;grid-row:1;border-radius:28px!important;font-size:32px;line-height:1}
        .box-prev{grid-column:1;grid-row:2;border-radius:22px!important;font-size:27px}
        .box-play{grid-column:2;grid-row:2;border-radius:28px!important;font-size:25px}
        .box-next{grid-column:3;grid-row:2;border-radius:22px!important;font-size:27px}
        .box-vol-down{grid-column:2;grid-row:3;border-radius:28px!important;font-size:32px;line-height:1}
        .box-presets{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding-top:13px;border-top:1px solid var(--border)}
        .box-preset{height:58px;border-radius:20px;font-size:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 14px}
        @media(max-width:430px){.box-shell{padding:11px;border-radius:24px}.box-top{gap:8px}.box-top .box-button{height:46px}.box-source-grid{gap:7px}.box-source{height:52px;border-radius:18px;font-size:11px}.box-control{grid-template-columns:1fr 1.08fr 1fr;grid-template-rows:64px 70px 64px;gap:8px;margin-bottom:12px}.box-vol-up,.box-vol-down{font-size:29px}.box-prev,.box-next{font-size:24px}.box-play{font-size:22px}.box-preset{height:54px;font-size:14px}}
      </style>
      <div class="box-remote">
        <div class="box-shell">
          <div class="box-top">
            <button class="box-button box-power" data-action="power">⏻ &nbsp; POWER</button>
            <button class="box-button" data-action="mute">🔇 &nbsp; MUTE</button>
          </div>
          <div class="box-source-grid">
            <button class="box-button box-source" data-action="light"><span class="box-icon">💡</span><span>LIGHT</span></button>
            <button class="box-button box-source" data-action="bluetooth"><span class="box-icon">ᛒ</span><span>BT</span></button>
            <button class="box-button box-source" data-action="usb"><span class="box-icon">▣</span><span>USB</span></button>
            <button class="box-button box-source" data-action="aux"><span class="box-icon">⌁</span><span>AUX</span></button>
          </div>
          <div class="box-control">
            <button class="box-button box-vol-up" data-action="volume_up">＋</button>
            <button class="box-button box-prev" data-action="previous">⏮</button>
            <button class="box-button box-play" data-action="play_pause">▶❚❚</button>
            <button class="box-button box-next" data-action="next">⏭</button>
            <button class="box-button box-vol-down" data-action="volume_down">−</button>
          </div>
          <div class="box-presets">
            <button class="box-button box-preset" data-action="preset_1">${p1}</button>
            <button class="box-button box-preset" data-action="preset_2">${p2}</button>
          </div>
        </div>
      </div>`;
  },
};
