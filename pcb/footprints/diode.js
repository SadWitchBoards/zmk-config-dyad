module.exports = {
    params: {
        designator: 'D',
        from:  {type: 'net', value: 'from'},
        to:  {type: 'net', value: 'to'}
    },
    body: p => `

    (module ComboDiode (layer F.Cu) (tedit 5B24D78E)


        ${p.at /* parametric position */}

        ${''/* diode symbols */}
        (fp_line (start 0.25 0) (end 0.75 0) (layer B.SilkS) (width 0.1))
        (fp_line (start 0.25 0.4) (end -0.35 0) (layer B.SilkS) (width 0.1))
        (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer B.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end 0.25 -0.4) (layer B.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end -0.35 0.55) (layer B.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end -0.35 -0.55) (layer B.SilkS) (width 0.1))
        (fp_line (start -0.75 0) (end -0.35 0) (layer B.SilkS) (width 0.1))

        ${''/* SMD pads on both sides */}
        (pad "" smd rect (at 1.65 0 ${p.r}) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) ${p.from})
        (pad "" smd rect (at -1.65 0 ${p.r}) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) ${p.to})
    )

    `
}
