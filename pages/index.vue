<template>
  <div>
    <div class="headImg" style="background-image: url('../assets/img/bg.jpeg')">
      <div
        class="head-overlay d-flex justify-content-center align-items-center"
      >
        <div class="singleCol container text-center">
          <h1>Bienvenue sur Troov~Test</h1>
          <p class="lead">
            <strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              amet dolore praesentium quia accusamus, fugit officia nam minima
              cum totam nihil inventore.
            </strong>
          </p>
          <nuxt-link to="/event" class="btn btn-outline-light"
            ><strong>Nos évenements</strong></nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
  <main>
    <div class="darkBG py-5">
      <div class="container singleCol">
        <p class="lead">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          inventore ex ratione accusamus accusantium odio consequatur!
          Asperiores reprehenderit voluptates, molestias deserunt facilis iusto
          voluptate. Velit dignissimos sed ipsa illo laudantium?
        </p>
      </div>
    </div>
    <div class="container">
      <div class="row py-4">
        <div class="col-12 col-md-4">
          <p class="lead">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          </p>
        </div>
        <div class="col-12 col-md-4">
          <p class="lead">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          </p>
        </div>
        <div class="col-12 col-md-4">
          <p class="lead">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.headImg {
  background-size: cover;
  min-height: 80vh;
  position: relative;
  color: white;
}

.head-overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

h1 {
  font-size: 3rem;
}

.singleCol {
  margin: auto;
  max-width: 750px;
}

.darkBG {
  background-color: #363636;
  color: white;
}
</style>
