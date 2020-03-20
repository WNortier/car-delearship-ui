<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link> 
    <router-link to="/inventory">Inventory</router-link>-->

    <!-- NAVBAR -->
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-container>
          <b-navbar-brand href="#" to="/">Autos Inventory</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#" to="/">Home</b-nav-item>
              <b-nav-item href="#" to="inventory">Inventory</b-nav-item>
              <b-nav-item href="#" to="statistics">Statistics</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                  <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="search"></b-form-input>
                <b-button
                  size="sm"
                  class="my-2 my-sm-0"
                  type="text"
                  @click.prevent="emitSearch('Volkswagen')"
                >Search</b-button>
              </b-nav-form>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </div>

    <!-- NAV ICON -->
    <header class="py-2 bg-info">
      <b-container>
        <b-row>
          <b-col cols="12">
            <h1 class="text-left text-white">
              <i :class="icon"></i> {{menuName}}
              <i class="icon"></i>
            </h1>
          </b-col>
        </b-row>
      </b-container>
    </header>

    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      value: "",
      icon: "fas fa-home",
      menuName: "Home"
    };
  },
  watch: {
    $route(to, from) {
      if (to.name == "Inventory") {
        this.icon = "fas fa-car"
        this.menuName = "Inventory"
      } else if (to.name == "Home") {
        this.icon = "fas fa-home"
        this.menuName = "Home"
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>