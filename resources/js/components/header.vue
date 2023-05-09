<template lang="">
    <div class="header__furnish-section">
      <!-- navbar start -->
      <nav
        class="navbar navbar-expand-lg  header__furnish-navbar"
      >
        <div class="container">
          <div class="header__furnish-logo">
            <a class="navbar-brand" href="/">
              <img
                class="_nav_logo"
                src="images/logo.png"
                alt="logo"
              />
              <img
                class="_nav_logo-mobile"
                src="assets/images/f2sd.png"
                alt="halbor"
              />
            </a>
          </div>
          <button
            class="navbar-toggler _toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav header__furnish-nav">
              <router-link class="nav-item header__furnish-nav-item" exact active-class="_active" tag="li" to="/">
                <a class="nav-link header__furnish-nav-link">Home</a>
              </router-link>
              <router-link class="nav-item header__furnish-nav-item" exact active-class="_active" tag="li" to="/about">
                <a class="nav-link header__furnish-nav-link">About</a>
              </router-link>
              <router-link class="nav-item header__furnish-nav-item" exact active-class="_active" tag="li" to="/services">
                <a class="nav-link header__furnish-nav-link">Services</a>
              </router-link>
              <router-link class="nav-item header__furnish-nav-item" exact active-class="_active" tag="li" to="/blogs">
                <a class="nav-link header__furnish-nav-link">Blogs</a>
              </router-link>
              <router-link class="nav-item header__furnish-nav-item" exact active-class="_active" tag="li" to="/projects">
                <a class="nav-link header__furnish-nav-link">Projects</a>
              </router-link>
              <router-link class="nav-item header__furnish-nav-item" exact active-class="_active" tag="li" to="/contact-us">
                <a class="nav-link header__furnish-nav-link">Contact Us</a>
              </router-link>
            </ul>
          </div>
        </div>
      </nav>
      <!-- navbar ends -->
    </div>
</template>
<script>


</script> 