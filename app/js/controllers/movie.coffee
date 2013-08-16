angular.module("app").controller('MovieCtrl', ['$rootScope','$scope', '$http', '$location', '$window', ($rootScope, $scope, $http, $location, $window) ->

  canvas = document.getElementById("canvas")
  stage = new createjs.Stage(canvas)

  handleFileLoad = (event) ->
    if (event.item.type is 'image')
      SavvyParrot.images[event.item.id] = event.result
    return

  handleComplete = () ->
    movieClip = new SavvyParrot.Adventure04Lesson004(null, 0, false, window)
    stage.addChild(movieClip)
    stage.update()

    createjs.Ticker.setFPS(16)
    createjs.Ticker.addEventListener("tick", stage)
    return

  manifest = [
    {src:"/img/farmhouse-1500x1201.png",    id:'img-farmhouse'},
    {src:"/img/island-1523x1219.png",       id:"img-island"},
    {src:"/sound/pepi.mp3|/sound/pepi.ogg", id:"sound-pepi"}
  ]

  loader = new createjs.LoadQueue(false)
  loader.installPlugin(createjs.Sound)
  loader.addEventListener("fileload", handleFileLoad)
  loader.addEventListener("complete", handleComplete)
  loader.loadManifest(manifest)
])
