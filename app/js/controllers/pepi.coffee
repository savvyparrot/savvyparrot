angular.module("app").controller('PepiCtrl', ['$rootScope','$scope', '$http', '$location', '$window', ($rootScope, $scope, $http, $location, $window) ->

  canvas = document.getElementById("canvas")
  stage = new createjs.Stage(canvas)

  handleFileLoad = (event) ->
    if (event.item.type is 'image')
      images[event.item.id] = event.result
    return

  handleComplete = () ->
    movieClip = new lib.PepiMovieClip(null, 0, false, window)
    stage.addChild(movieClip)
    stage.update()

    createjs.Ticker.setFPS(16)
    createjs.Ticker.addEventListener("tick", stage)
    return

  manifest = [
    {src:"/img/farmhouse.png", id:'img-farmhouse'},
    {src:"/img/island.png",    id:"img-island"},
    {src:"/sound/pepi.mp3",    id:"sound-pepi"}
  ]

  loader = new createjs.LoadQueue(false)
  loader.installPlugin(createjs.Sound)
  loader.addEventListener("fileload", handleFileLoad)
  loader.addEventListener("complete", handleComplete)
  loader.loadManifest(manifest)
])
