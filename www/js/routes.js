angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('gUAUNLaR.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('gUAUNLaR.acercaDeLaApp', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acercaDeLaApp.html',
        controller: 'acercaDeLaAppCtrl'
      }
    }
  })

  .state('gUAUNLaR', {
    url: '/side-menu21',
    templateUrl: 'templates/gUAUNLaR.html',
    controller: 'gUAUNLaRCtrl'
  })

  .state('gUAUNLaR.ingresantes', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingresantes.html',
        controller: 'ingresantesCtrl'
      }
    }
  })

  .state('gUAUNLaR.requisitosDeIngreso', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/requisitosDeIngreso.html',
        controller: 'requisitosDeIngresoCtrl'
      }
    }
  })

  .state('gUAUNLaR.calendarioAcadMico', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calendarioAcadMico.html',
        controller: 'calendarioAcadMicoCtrl'
      }
    }
  })

  .state('gUAUNLaR.mapaCiudadUniversitaria', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mapaCiudadUniversitaria.html',
        controller: 'mapaCiudadUniversitariaCtrl'
      }
    }
  })

  .state('gUAUNLaR.graduados', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/graduados.html',
        controller: 'graduadosCtrl'
      }
    }
  })

  .state('gUAUNLaR.adscripciones', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/adscripciones.html',
        controller: 'adscripcionesCtrl'
      }
    }
  })

  .state('gUAUNLaR.fechasDeColaciN', {
    url: '/page23',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fechasDeColaciN.html',
        controller: 'fechasDeColaciNCtrl'
      }
    }
  })

  .state('gUAUNLaR.obraSocialGraduados', {
    url: '/page24',
    views: {
      'side-menu21': {
        templateUrl: 'templates/obraSocialGraduados.html',
        controller: 'obraSocialGraduadosCtrl'
      }
    }
  })

  .state('gUAUNLaR.proyectosDeExtensiN', {
    url: '/page25',
    views: {
      'side-menu21': {
        templateUrl: 'templates/proyectosDeExtensiN.html',
        controller: 'proyectosDeExtensiNCtrl'
      }
    }
  })

  .state('gUAUNLaR.trMiteDeTTulo', {
    url: '/page26',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trMiteDeTTulo.html',
        controller: 'trMiteDeTTuloCtrl'
      }
    }
  })

  .state('gUAUNLaR.redDeTrabajo', {
    url: '/page27',
    views: {
      'side-menu21': {
        templateUrl: 'templates/redDeTrabajo.html',
        controller: 'redDeTrabajoCtrl'
      }
    }
  })

  .state('gUAUNLaR.estudiantes', {
    url: '/page28',
    views: {
      'side-menu21': {
        templateUrl: 'templates/estudiantes.html',
        controller: 'estudiantesCtrl'
      }
    }
  })

  .state('gUAUNLaR.infoExMenesFinales', {
    url: '/page29',
    views: {
      'side-menu21': {
        templateUrl: 'templates/infoExMenesFinales.html',
        controller: 'infoExMenesFinalesCtrl'
      }
    }
  })

  .state('gUAUNLaR.eVAUNLaR', {
    url: '/page30',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eVAUNLaR.html',
        controller: 'eVAUNLaRCtrl'
      }
    }
  })

  .state('gUAUNLaR.sIU', {
    url: '/page31',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sIU.html',
        controller: 'sIUCtrl'
      }
    }
  })

  .state('gUAUNLaR.beneficios', {
    url: '/page32',
    views: {
      'side-menu21': {
        templateUrl: 'templates/beneficios.html',
        controller: 'beneficiosCtrl'
      }
    }
  })

  .state('gUAUNLaR.comedorUniversitario', {
    url: '/page33',
    views: {
      'side-menu21': {
        templateUrl: 'templates/comedorUniversitario.html',
        controller: 'comedorUniversitarioCtrl'
      }
    }
  })

  .state('gUAUNLaR.bibliotecaCentral', {
    url: '/page34',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bibliotecaCentral.html',
        controller: 'bibliotecaCentralCtrl'
      }
    }
  })

  .state('gUAUNLaR.licenciaEstudiantil', {
    url: '/page35',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licenciaEstudiantil.html',
        controller: 'licenciaEstudiantilCtrl'
      }
    }
  })

  .state('gUAUNLaR.seguroEstudiantil', {
    url: '/page36',
    views: {
      'side-menu21': {
        templateUrl: 'templates/seguroEstudiantil.html',
        controller: 'seguroEstudiantilCtrl'
      }
    }
  })

  .state('gUAUNLaR.museoUNLaR', {
    url: '/page39',
    views: {
      'side-menu21': {
        templateUrl: 'templates/museoUNLaR.html',
        controller: 'museoUNLaRCtrl'
      }
    }
  })

  .state('gUAUNLaR.deporte', {
    url: '/page40',
    views: {
      'side-menu21': {
        templateUrl: 'templates/deporte.html',
        controller: 'deporteCtrl'
      }
    }
  })

  .state('gUAUNLaR.salaDePrimerosAuxilios', {
    url: '/page41',
    views: {
      'side-menu21': {
        templateUrl: 'templates/salaDePrimerosAuxilios.html',
        controller: 'salaDePrimerosAuxiliosCtrl'
      }
    }
  })

  .state('gUAUNLaR.trMites', {
    url: '/page42',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trMites.html',
        controller: 'trMitesCtrl'
      }
    }
  })

  .state('gUAUNLaR.solicitarMesaEspecial', {
    url: '/page43',
    views: {
      'side-menu21': {
        templateUrl: 'templates/solicitarMesaEspecial.html',
        controller: 'solicitarMesaEspecialCtrl'
      }
    }
  })

  .state('gUAUNLaR.solicitarEquivalencias', {
    url: '/page44',
    views: {
      'side-menu21': {
        templateUrl: 'templates/solicitarEquivalencias.html',
        controller: 'solicitarEquivalenciasCtrl'
      }
    }
  })

  .state('gUAUNLaR.cambioDePlanDeEstudios', {
    url: '/page45',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cambioDePlanDeEstudios.html',
        controller: 'cambioDePlanDeEstudiosCtrl'
      }
    }
  })

  .state('gUAUNLaR.cancelaciNDeMatrCula', {
    url: '/page46',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cancelaciNDeMatrCula.html',
        controller: 'cancelaciNDeMatrCulaCtrl'
      }
    }
  })

  .state('gUAUNLaR.duplicadoDeLibreta', {
    url: '/page47',
    views: {
      'side-menu21': {
        templateUrl: 'templates/duplicadoDeLibreta.html',
        controller: 'duplicadoDeLibretaCtrl'
      }
    }
  })

  .state('gUAUNLaR.certificadoDeAlumnoRegular', {
    url: '/page48',
    views: {
      'side-menu21': {
        templateUrl: 'templates/certificadoDeAlumnoRegular.html',
        controller: 'certificadoDeAlumnoRegularCtrl'
      }
    }
  })

  .state('gUAUNLaR.certificadoDeAlumnoInscripto', {
    url: '/page49',
    views: {
      'side-menu21': {
        templateUrl: 'templates/certificadoDeAlumnoInscripto.html',
        controller: 'certificadoDeAlumnoInscriptoCtrl'
      }
    }
  })

  .state('gUAUNLaR.ayudanteAlumno', {
    url: '/page50',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ayudanteAlumno.html',
        controller: 'ayudanteAlumnoCtrl'
      }
    }
  })

  .state('gUAUNLaR.corregirDatosPersonales', {
    url: '/page51',
    views: {
      'side-menu21': {
        templateUrl: 'templates/corregirDatosPersonales.html',
        controller: 'corregirDatosPersonalesCtrl'
      }
    }
  })

  .state('gUAUNLaR.trMiteDeTTulo2', {
    url: '/page52',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trMiteDeTTulo2.html',
        controller: 'trMiteDeTTulo2Ctrl'
      }
    }
  })

  .state('gUAUNLaR.nDeExpedienteDeMiTrMite', {
    url: '/page53',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nDeExpedienteDeMiTrMite.html',
        controller: 'nDeExpedienteDeMiTrMiteCtrl'
      }
    }
  })

  .state('gUAUNLaR.inicioDeTrabajoFinal', {
    url: '/page54',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicioDeTrabajoFinal.html',
        controller: 'inicioDeTrabajoFinalCtrl'
      }
    }
  })

  .state('gUAUNLaR.reglamentos', {
    url: '/page55',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reglamentos.html',
        controller: 'reglamentosCtrl'
      }
    }
  })

  .state('gUAUNLaR.reglamentoDeAlumnos', {
    url: '/page37',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reglamentoDeAlumnos.html',
        controller: 'reglamentoDeAlumnosCtrl'
      }
    }
  })

  .state('gUAUNLaR.protocoloDeViolenciaDeGenero', {
    url: '/page38',
    views: {
      'side-menu21': {
        templateUrl: 'templates/protocoloDeViolenciaDeGenero.html',
        controller: 'protocoloDeViolenciaDeGeneroCtrl'
      }
    }
  })

  .state('gUAUNLaR.estatutoUniversitario', {
    url: '/page56',
    views: {
      'side-menu21': {
        templateUrl: 'templates/estatutoUniversitario.html',
        controller: 'estatutoUniversitarioCtrl'
      }
    }
  })

  .state('gUAUNLaR.becasDeIncentivoAcadMico', {
    url: '/page57',
    views: {
      'side-menu21': {
        templateUrl: 'templates/becasDeIncentivoAcadMico.html',
        controller: 'becasDeIncentivoAcadMicoCtrl'
      }
    }
  })

  .state('gUAUNLaR.becasTransporte', {
    url: '/page62',
    views: {
      'side-menu21': {
        templateUrl: 'templates/becasTransporte.html',
        controller: 'becasTransporteCtrl'
      }
    }
  })

  .state('gUAUNLaR.becasDeExperienciaLaboral', {
    url: '/page58',
    views: {
      'side-menu21': {
        templateUrl: 'templates/becasDeExperienciaLaboral.html',
        controller: 'becasDeExperienciaLaboralCtrl'
      }
    }
  })

  .state('gUAUNLaR.becasProgresar', {
    url: '/page63',
    views: {
      'side-menu21': {
        templateUrl: 'templates/becasProgresar.html',
        controller: 'becasProgresarCtrl'
      }
    }
  })

  .state('gUAUNLaR.becasDeTutorAsAcadMicas', {
    url: '/page59',
    views: {
      'side-menu21': {
        templateUrl: 'templates/becasDeTutorAsAcadMicas.html',
        controller: 'becasDeTutorAsAcadMicasCtrl'
      }
    }
  })

  .state('gUAUNLaR.ayudanteInvestigador', {
    url: '/page64',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ayudanteInvestigador.html',
        controller: 'ayudanteInvestigadorCtrl'
      }
    }
  })

  .state('gUAUNLaR.preIniciaciNALaInvestigaciN', {
    url: '/page65',
    views: {
      'side-menu21': {
        templateUrl: 'templates/preIniciaciNALaInvestigaciN.html',
        controller: 'preIniciaciNALaInvestigaciNCtrl'
      }
    }
  })

  .state('gUAUNLaR.convocatoriaBecas', {
    url: '/page61',
    views: {
      'side-menu21': {
        templateUrl: 'templates/convocatoriaBecas.html',
        controller: 'convocatoriaBecasCtrl'
      }
    }
  })

  .state('gUAUNLaR.vinculaciNTecnolGica', {
    url: '/page66',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vinculaciNTecnolGica.html',
        controller: 'vinculaciNTecnolGicaCtrl'
      }
    }
  })

  .state('horarios1Cuatrimestre', {
    url: '/page67',
    templateUrl: 'templates/horarios1Cuatrimestre.html',
    controller: 'horarios1CuatrimestreCtrl'
  })

  .state('gUAUNLaR.planesDeEstudio', {
    url: '/page82',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planesDeEstudio.html',
        controller: 'planesDeEstudioCtrl'
      }
    }
  })

  .state('gUAUNLaR.cienciasAplicadas', {
    url: '/page83',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cienciasAplicadas.html',
        controller: 'cienciasAplicadasCtrl'
      }
    }
  })

  .state('gUAUNLaR.cienciasExactasFSicasYNaturales', {
    url: '/page84',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cienciasExactasFSicasYNaturales.html',
        controller: 'cienciasExactasFSicasYNaturalesCtrl'
      }
    }
  })

  .state('gUAUNLaR.cienciasHumanasYDeLaEducaciN', {
    url: '/page85',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cienciasHumanasYDeLaEducaciN.html',
        controller: 'cienciasHumanasYDeLaEducaciNCtrl'
      }
    }
  })

  .state('gUAUNLaR.cienciasSocialesJurDicasYEconMicas', {
    url: '/page86',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cienciasSocialesJurDicasYEconMicas.html',
        controller: 'cienciasSocialesJurDicasYEconMicasCtrl'
      }
    }
  })

  .state('gUAUNLaR.cienciasDeLaSalud', {
    url: '/page87',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cienciasDeLaSalud.html',
        controller: 'cienciasDeLaSaludCtrl'
      }
    }
  })

  .state('gUAUNLaR.aimogasta', {
    url: '/page88',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aimogasta.html',
        controller: 'aimogastaCtrl'
      }
    }
  })

  .state('gUAUNLaR.catuna', {
    url: '/page89',
    views: {
      'side-menu21': {
        templateUrl: 'templates/catuna.html',
        controller: 'catunaCtrl'
      }
    }
  })

  .state('gUAUNLaR.chamical', {
    url: '/page90',
    views: {
      'side-menu21': {
        templateUrl: 'templates/chamical.html',
        controller: 'chamicalCtrl'
      }
    }
  })

  .state('gUAUNLaR.chepes', {
    url: '/page91',
    views: {
      'side-menu21': {
        templateUrl: 'templates/chepes.html',
        controller: 'chepesCtrl'
      }
    }
  })

  .state('gUAUNLaR.villaUniN', {
    url: '/page92',
    views: {
      'side-menu21': {
        templateUrl: 'templates/villaUniN.html',
        controller: 'villaUniNCtrl'
      }
    }
  })

  .state('gUAUNLaR.olta', {
    url: '/page93',
    views: {
      'side-menu21': {
        templateUrl: 'templates/olta.html',
        controller: 'oltaCtrl'
      }
    }
  })

  .state('gUAUNLaR.tama', {
    url: '/page94',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tama.html',
        controller: 'tamaCtrl'
      }
    }
  })

  .state('gUAUNLaR.ulapes', {
    url: '/page95',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ulapes.html',
        controller: 'ulapesCtrl'
      }
    }
  })

  .state('gUAUNLaR.vinchina', {
    url: '/page96',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vinchina.html',
        controller: 'vinchinaCtrl'
      }
    }
  })

  .state('gUAUNLaR.becaExtensionista', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/becaExtensionista.html',
        controller: 'becaExtensionistaCtrl'
      }
    }
  })

  .state('gUAUNLaR.becasDeportivasYCulturales', {
    url: '/page77',
    views: {
      'side-menu21': {
        templateUrl: 'templates/becasDeportivasYCulturales.html',
        controller: 'becasDeportivasYCulturalesCtrl'
      }
    }
  })

  .state('gUAUNLaR.cineClubUniversitario', {
    url: '/page81',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cineClubUniversitario.html',
        controller: 'cineClubUniversitarioCtrl'
      }
    }
  })

  .state('gUAUNLaR.tecElectroElectrNica', {
    url: '/page97',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tecElectroElectrNica.html',
        controller: 'tecElectroElectrNicaCtrl'
      }
    }
  })

  .state('gUAUNLaR.ingIndustrial', {
    url: '/page98',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingIndustrial.html',
        controller: 'ingIndustrialCtrl'
      }
    }
  })

  .state('gUAUNLaR.ingAgronMica', {
    url: '/page99',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingAgronMica.html',
        controller: 'ingAgronMicaCtrl'
      }
    }
  })

  .state('gUAUNLaR.ingAgroindustrial', {
    url: '/page100',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingAgroindustrial.html',
        controller: 'ingAgroindustrialCtrl'
      }
    }
  })

  .state('gUAUNLaR.ingEnAlimentos', {
    url: '/page101',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingEnAlimentos.html',
        controller: 'ingEnAlimentosCtrl'
      }
    }
  })

  .state('gUAUNLaR.arquitectura', {
    url: '/page102',
    views: {
      'side-menu21': {
        templateUrl: 'templates/arquitectura.html',
        controller: 'arquitecturaCtrl'
      }
    }
  })

  .state('gUAUNLaR.ingCivil', {
    url: '/page103',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingCivil.html',
        controller: 'ingCivilCtrl'
      }
    }
  })

  .state('gUAUNLaR.ingDeMinas', {
    url: '/page104',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingDeMinas.html',
        controller: 'ingDeMinasCtrl'
      }
    }
  })

  .state('gUAUNLaR.geologA', {
    url: '/page105',
    views: {
      'side-menu21': {
        templateUrl: 'templates/geologA.html',
        controller: 'geologACtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});