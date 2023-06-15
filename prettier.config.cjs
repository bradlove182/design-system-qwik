/** @type {import('prettier')} */

module.exports = {
    tabWidth: 4,
    importOrder: ["@lib", "^components/(.*)$", "^[./]"],
    importOrderSeperation: true,
    importOrderSortSpecifiers: true,
};
