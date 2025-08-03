var manipulateArr = {
  data: [],
  pushVal: function (val) {
    if (this.hasValue(val)) {
      throw "This value already exists";
    }

    if (this.isEmpty() || this.data[this.data.length - 1] < val) {
      this.data.push(val);
    } else {
      throw "Entered Value is smaller than the last entered element";
    }
  },
  popVal: function () {
    this.data.pop();
  },
  enqueueVal: function (val) {
    if (this.hasValue(val)) {
      throw "This value already exists";
    }

    if (this.isEmpty() || this.data[0] > val) {
      this.data.unshift(val);
    } else {
      throw "Entered Value is larger than the first element";
    }
  },
  dequeueVal: function () {
    this.data.shift();
  },
  display: function () {
    for (var ele of this.data) {
      console.log(ele);
    }
  },
  insertVal: function (index, val) {
    if (this.hasValue(val)) {
      throw "This value already exists";
    }
    if (index == 0) {
      return this.enqueueVal(val);
    }
    if (index == this.data.length - 1) {
      return this.pushVal(val);
    }
    if (this.data[index] > val && this.data[index - 1] < val) {
      return this.data.splice(index, 0, val);
    }
    if (this.data[index] < val) {
      throw (
        "Entered Value is larger than the element after it: " + this.data[index]
      );
    }
    if (this.data[index - 1] > val) {
      throw (
        "Entered Value is smaller than the element before it: " +
        this.data[index - 1]
      );
    }
  },
  removeVal: function (val) {
    if (this.hasValue(val)) {
      var indexOfVal = this.data.indexOf(val);
      this.data.splice(indexOfVal, 1);
    } else {
      throw "Data not found";
    }
  },
  hasValue: function (val) {
    return this.data.includes(val);
  },
  isEmpty: function () {
    return this.data.length == 0;
  },
};
