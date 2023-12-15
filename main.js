Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
Webcam.attach("#camera")
function take_snapshot() {
    Webcam.snap(function (pic) {
        document.getElementById("result").innerHTML = '<img id="snap" src="' + pic + '">';
    })
}
img_model = ml5.imageFinder("https://teachablemachine.withgoogle.com/models/JAgwIjVBD/model.json",faceloaded)
function faceloaded() {
    console.log("face succsefully loaded")
}