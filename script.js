document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("workOrderTitle").placeholder = "Title";
    document.getElementById("workOrderTitle").value = "";
    document.getElementById("assetOrLocation").value = "select";
    document.getElementById("assetName").value = "select";
    document.getElementById("locationName").value = "select";
    document.getElementById("workType").value = "select";
    document.getElementById("userName").value = "select";
});

document.getElementById("newWorkOrderButton").addEventListener("click", function() {
    this.style.display = "none";
    document.getElementById("workOrderForm").style.display = "block";
});

document.getElementById("assetOrLocation").addEventListener("change", function() {
    const selectedValue = this.value;
    if (selectedValue === "select") {
        document.getElementById("assetNameDiv").style.display = "none";
        document.getElementById("locationNameDiv").style.display = "none";
    } else if (selectedValue === "asset") {
        document.getElementById("assetNameDiv").style.display = "block";
        document.getElementById("locationNameDiv").style.display = "none";
    } else if (selectedValue === "location") {
        document.getElementById("assetNameDiv").style.display = "none";
        document.getElementById("locationNameDiv").style.display = "block";
    }
});