(function(exports){

  function View(noteList){
    this.array = [];
    this.noteList = noteList;
  }

  View.prototype.listView = function() {
    for(i = 0; i < this.noteList.noteArray.length; i++){
      this.array.push(this.noteList.noteArray[i].text);
    }
  };

  View.prototype.returnArray = function () {
    var string = [];
    string = this.array.join("</div></li><li><div>");
    return ("<ul><li><div>" + string + "</div></li></ul>");
};

exports.View = View;

})(this);
