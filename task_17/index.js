var addressInput = document.getElementById("addressInput");
var addressSelect = document.getElementById("addressSelect");

var geocoder = ymaps.geocode("");

addressInput.addEventListener("input", function () {
  var query = addressInput.value;

  geocoder.then(
    function (res) {
      addressSelect.innerHTML = "";

      res.geoObjects.each(function (obj) {
        var option = document.createElement("option");
        option.value = obj.getAddressLine();
        addressSelect.appendChild(option);
      });
    },
    function (err) {
      console.error(err);
    }
  );

  geocoder.then(function () {
    geocoder.requestAddress(query);
  });
});
