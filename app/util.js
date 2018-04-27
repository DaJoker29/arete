export default (function() {
  /**
   * Useful method to title case string.
   * @type {String}
   */
  String.prototype.titleCase =
    String.prototype.titleCase ||
    function() {
      return this.replace(
        /\w\S*/g,
        txt => txt.charAt(0).toUpperCase() + this.slice(1)
      );
    };
})();
