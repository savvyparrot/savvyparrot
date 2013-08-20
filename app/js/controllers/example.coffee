angular.module("app").controller('ExampleCtrl', ['$rootScope','$scope', '$http', '$location', '$window', ($rootScope, $scope, $http, $location, $window) ->

  handleFileLoad = (event) ->
    if (event.item.type is 'image')
      SavvyParrot.images[event.item.id] = event.result
    return

  handleComplete = () ->
    movieClip = new SavvyParrot.ExampleMovieClip(null, 0, false, window)
    stage.addChild(movieClip)
    stage.update()

    createjs.Ticker.setFPS(16)
    createjs.Ticker.addEventListener("tick", stage)
    return

  handleWindowResize = () ->
    stageManager.resizeStage()
    return

  manifest = [
    {src:"/img/farmhouse-1500x1201.png",    id:'img-farmhouse'},
    {src:"/img/island-1523x1219.png",       id:"img-island"},
    {src:"/sound/pepi.mp3|/sound/pepi.ogg", id:"sound-pepi"}
  ]

  canvas = document.getElementById('gameCanvas')
  stage = new createjs.Stage(canvas)
  stageManager = new SavvyParrot.StageManager(stage)

  window.addEventListener('resize', handleWindowResize, false)
  window.addEventListener('orientationChange', handleWindowResize, false)

  stageManager.resizeStage()

  loader = new createjs.LoadQueue(false)
  loader.installPlugin(createjs.Sound)
  loader.addEventListener('fileload', handleFileLoad)
  loader.addEventListener('complete', handleComplete)
  loader.loadManifest(manifest)
])