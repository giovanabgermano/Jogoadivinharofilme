/**
 * Web Audio API synthesizer for clean sound feedback:
 * - Acerto (+10 pts)
 * - Tomate batendo na tela (squish / splatter cômico com som de impacto)
 * - Subida de fase e desbloqueio de item de moda
 * - Vitória
 */

class SoundEffects {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Som alegre de acerto (+10 pontos)
  playCorrect() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      // Arpeggio brilhante de acerto: F5 -> A5 -> C6
      const notes = [698.46, 880.00, 1046.50];
      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = now + idx * 0.08;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.14, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(start);
        osc.stop(start + 0.25);
      });
    } catch {
      // Ignore audio policy blocks
    }
  }

  // Som de tomate sendo arremessado e se esborrachando na tela ("SPLAT / SQUISH")
  playTomatoSplatter() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // 1. Whoosh rápido (voo do tomate)
      const whooshOsc = this.ctx.createOscillator();
      const whooshGain = this.ctx.createGain();
      whooshOsc.type = 'sine';
      whooshOsc.frequency.setValueAtTime(320, now);
      whooshOsc.frequency.exponentialRampToValueAtTime(140, now + 0.12);
      whooshGain.gain.setValueAtTime(0.12, now);
      whooshGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      whooshOsc.connect(whooshGain);
      whooshGain.connect(this.ctx.destination);
      whooshOsc.start(now);
      whooshOsc.stop(now + 0.12);

      // 2. Impacto + Ruído esborrachado (Splatter com White Noise)
      const impactTime = now + 0.1;
      const bufferSize = this.ctx.sampleRate * 0.25;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;

      // Filtro passa-baixa para som mais gosmento/úmido
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, impactTime);
      filter.frequency.linearRampToValueAtTime(250, impactTime + 0.2);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.3, impactTime);
      noiseGain.gain.exponentialRampToValueAtTime(0.01, impactTime + 0.25);

      whiteNoise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);

      whiteNoise.start(impactTime);

      // 3. Tom grave de baque ("thud")
      const thudOsc = this.ctx.createOscillator();
      const thudGain = this.ctx.createGain();
      thudOsc.type = 'triangle';
      thudOsc.frequency.setValueAtTime(160, impactTime);
      thudOsc.frequency.exponentialRampToValueAtTime(50, impactTime + 0.18);

      thudGain.gain.setValueAtTime(0.25, impactTime);
      thudGain.gain.exponentialRampToValueAtTime(0.001, impactTime + 0.18);

      thudOsc.connect(thudGain);
      thudGain.connect(this.ctx.destination);
      thudOsc.start(impactTime);
      thudOsc.stop(impactTime + 0.18);
    } catch {
      // Ignore
    }
  }

  // Som ao subir de fase e desbloquear item de moda
  playPhaseLevelUp() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6
      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = now + idx * 0.09;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.18, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.35);
      });
    } catch {
      // Silently ignore
    }
  }

  // Fanfarra de vitória quando um jogador atinge 1000 pts e vence
  playVictory() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const fanfare = [
        { f: 523.25, t: 0.0, d: 0.15 }, // C5
        { f: 523.25, t: 0.16, d: 0.15 }, // C5
        { f: 523.25, t: 0.32, d: 0.15 }, // C5
        { f: 659.25, t: 0.48, d: 0.3 },  // E5
        { f: 783.99, t: 0.8, d: 0.45 },  // G5
        { f: 1046.50, t: 1.28, d: 0.7 }  // C6 grand finale
      ];

      fanfare.forEach((n) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = now + n.t;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(n.f, start);

        gain.gain.setValueAtTime(0.2, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + n.d);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(start);
        osc.stop(start + n.d);
      });
    } catch {
      // Ignore
    }
  }
}

export const soundEffects = new SoundEffects();
