const synth = new Tone.Synth({
    oscillator: {
        type: 'sine'
    },
    envelope: {
        attack: 0.01,
        decay: 0.2,
        sustain: 0.4,
        release: 0.5
    }
}).toMaster();

synth.triggerAttackRelease('C5', '8n')

