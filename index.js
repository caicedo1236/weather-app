document.getElementById("button").addEventListener("click", showName)
function showName(x){
    const cityName = document.getElementById("cityInput");
    document.getElementById("cityName").textContent = cityName.value;
    x.preventDefault();
}