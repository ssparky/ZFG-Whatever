ServerEvents.recipes(event => {
    // Nq Line
    var NaqOres = [
        "enquedite", // KeNq4Np2PbGeO29Si6H
        "enquedine", // KeNq+3NqAmPuBiGeO29Si6H
        "enquedire", // Ke*Nq*Nq3Cm2TlGe2O28Si5I
        "kaemanite_rb", // Rb3Cs2KeBa6As4P2O24Cl6
        "kaemanite_cs", // Cs3Ke2RbBa6As6O25Br3Cl2I
        "kaemanite_ke", // Ke3Cs2FrBa6As6O24I4Br2
        "queryl", // Be3Nq2Si6O18
        "quarate", // N2H8Nq+TeO4S
        "xenocage", // Nq(UO2)4Xe3Si6O21F6 aka NqU4O29Xe3Si6F6
        "pezzottaite_ke", // CsKeBe4Li2Al2GaInSi12O36
        "naquasilite", // NqSiO4
        "trinicline", // Ke2AlGaSi2O6
        "cassitate", // Ke2Sr(SnO2)2O2 aka K2SrSn2O6
        "violite", // CsKeI2
        "stibiquine" // Nq+SbO4
    ]
    // General plan:
    // Nq/Ke ore dusts + (HBF4, SbF5, SO2HF2) -{digester}> [XF byproducts] + KeBF4 / NqBF5
    // KeBf4 / NqBF5 + CsOH -{chemReactor}> CsF + HF + HNqBO3 / KeBO2 [orthoborate / metaborate]
    // HNqBO3 + KeBO2 + (CxHxBrx, CxHxIx) -{mixer}> Organic Nq/Ke sludge
    // Organic Nq/Ke sludge -{fluidHeater}> Hot Organic Nq/Ke sludge
    // Hot Organic Nq/Ke sludge -{distillationTower}> Nq-rich organic layer + Nq+-rich organic layer + *Nq*-rich organic layer + Ke-rich organic layer
    //* + Heavy transuranic slurry + Light transuranic slurry + Alkaline Br/I mix + Argyrite sludge + REE Oxide mixture
    
    // Alkaline Br/I mix + [Coolant] -{centrifuge}> FrBr + CsBr + RbI + KI [Br/I feeds bacxk into organic solvents]
    // Argyrite sludge + [Coolant] -{centrifuge}> AgI, AgBr [Br/I feeds back into organic solvents]
    
    // Light transuranic slurry (...)
    // Heavy transuranic slurry (...)

    // Nq/Nq+/*Nq* organic layer -{EBF @ hightemp + (...)}> Impure Nq/Nq+/*Nq* dust
    // Impure Nq/Nq+/*Nq* dust + Laser concentration dust [...] -{,ixer}> Prepared Nq/Nq+/*Nq* dust
    // Prepared Nq/Nq+/*Nq* dust + NC Black/Blue/Green lens -{laserEngraver}> Scorched Nq/Nq+/*Nq* dust
    // Scorched Nq/Nq+/*Nq* dust -{thermalCentrifuge}> Nq/Nq+/*Nq* dust + Depleted/Irradiated laser concentration dust

    // Ke organic layer (...)


    // TODO: check common fluoride states for actinides (curr. assumed F4 for all)
    // VALIDATED: 45x KeNq4Np2PbGeO29Si6H + 5000mb HBF4 + 36x SbF5 + 6000mb SO2HF2 || 6x KeBF4 + 28x NqBF5 + 10x NpF4 + 3x PbF2 + 5x GeF4 + 30x SiF4 + 15x Sb2O3 + 6000mb H2SO4 + 8000mb O2
    // VALIDATED: 45x KeNq+3NqAmPuBiGeO29Si6H + 5000mb HBF4 + 36x SbF5 + 6000mb SO2HF2 || 6x KeBF4 + 21x Nq+BF5 + 7x NqBF5 + 5x AmF4 + 5x PuF4 + 3x BiOF + 5x GeF4 + 30x SiF4 + 15x Sb2O3 + 6000mb H2SO4 + 7000mb O2 + 1000mb F2

    
    
})