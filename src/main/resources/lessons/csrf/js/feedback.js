webgoat.customjs.feedback = function() {
    var test = "test";
    var data = {};
    $('#csrf-feedback').find('input, textarea, select').each(function(i, field) {
        data[field.name] = field.value;
    });
    return JSON.stringify(data);
}
