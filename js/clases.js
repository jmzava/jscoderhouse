/* Clases */

class Buceo {
    constructor(pReal, pTabla, tReal, tTabla, gRep) {
        this.profReal = pReal;
        this.profTabla = pTabla;
        this.tiempoReal = tReal;
        this.tiempoTabla = tTabla;
        this.grupoRep = gRep;
        this.tiempoOk = false;
        this.profunOk = false;
    }
    timeOK() {
        this.tiempoOk = true;
    }
    profOK() {
        this.profunOk = true;
    }
    timeOKno() {
        this.tiempoOk = false;
    }
    profOKno() {
        this.profunOk = false;
    }
}

class BuceoMezcla {
    constructor(tablaProf, noDeco) {
        this.tablaProfundidad = tablaProf;
        this.tablaNoDeco = noDeco;
    }
}

class generoLetraTiempo {
    constructor(decoTime, decoLetra) {
        this.decoTimeProf = decoTime;
        this.decoTimeLetra = decoLetra;
    }
}

