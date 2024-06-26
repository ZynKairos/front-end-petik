/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
const users = [{
    name: "Raihan",
    age: 18,
    major: 'Full Stak'
  }, {
    name: "Nur Wafiqa",
    age: 18,
    major: 'Web Developer'
  }, {
    name: "Nurul Inayah",
    age: 20,
    major: 'Back End'
  }, {
    name: "Ahmad Mudzakkir",
    age: 21,
    major: 'Mobile Developer'
  }, {
    name: "Syakir",
    age: 19,
    major: 'UI/UX Desainer'
  }];
  
  /**
   * TODO 2
   * Buat function all: Menampilkan semua data user.
   * Hint: Gunakan for/for-of.
   * Note: Ubah function menggunakan arrow function.
   */
  const all = () => {
    for (const user of users) {
      console.log(`Nama : ${user.name}\nUmur : ${user.age}\nJurusan : ${user.major}\n................................`)
    }
  };
  
  /**
   * TODO 3
   * Buat function store: Menambahkan user baru.
   * Hint: Gunakan method push.
   * Note: Ubah function menggunakan arrow function.
   */
  const store = (user) => {
    users.push(user)
  };
  
  /**
   * TODO 4.
   * Buat function update: Mengedit data user.
   * Hint: re-assign array.
   * Note: Ubah function menggunakan arrow function.
   */
  const update = (index, user) => {
    users[index] = user;
  };
  
  /**
   * TODO 5.
   * Buat function destroy: Menghapus data user.
   * Hint: Gunakan method splice.
   * Note: Ubah function menggunakan arrow function.
   */
  const destroy = (index) => {
    users.splice(index,1);
  };
  
  /**
   * Function main.
   * Jangan edit atau hapus function main.
   * Function ini untuk testing task.
   */
  
  function main() {
    /**
     * Test function index
     */
    console.log("# Get All Users");
    all();
  
    /**
     * Test function store
     */
    console.log("# Add New User: Sabil");
    const newUser = {
      name: "Sabil",
      age: 20,
      major: "Robotic",
    };
    store(newUser);
  
    /**
     * Test function update
     */
    console.log("# Edit User: Nurul Inayah");
    const editedIndex = 1;
    const editedUser = {
      name: "Latifah",
      age: 22,
      major: "English",
    };
    update(editedIndex, editedUser);
  
    /**
     * Test function destroy
     */
    console.log("# Delete User: Nurul");
    const deletedIndex = 2;
    destroy(deletedIndex);
    all();
  };
  
  main();
  
  /**
   * Jangan hapus exports.
   * Exports ini untuk tujuan testing.
   */
  module.exports = {
    users,
    all,
    store,
    update,
    destroy
  };