<script setup lang="ts">
import { ref, reactive } from "vue";
import axios from "axios";
const cookie = useCookie("troov-id");

const router = useRouter();

const errorMessage = ref(null);
const event = reactive({
  title: "",
  description: "",
  dateEvent: "",
  location: "",
});

const createEvent = async () => {
  axios
    .post("/event", {
      title: event.title,
      description: event.description,
      dateEvent: event.dateEvent,
      location: event.location,
      userId: cookie.value,
    })
    .then((response) => {
      console.log(response);
      event.title = "";
      event.description = "";
      event.dateEvent = "";
      event.location = "";
      router.push("/event");
    })
    .catch((error) => {
      console.error(error.response.data);
      errorMessage.value = error.response.data;
    });
};
</script>

<template>
  <div class="container">
    <div class="text-center my-5">
      <h1>Créer un événement</h1>
      <hr />
    </div>
    <div class="container my-5 pt-5">
      <div class="row">
        <div class="col-12 col-sm-8 col-md-6 off-md-3 m-auto">
          <div class="card border-0 shadow">
            <div class="card-body">
              <div class="text-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-calendar-event"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"
                  />
                  <path
                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                  />
                </svg>
              </div>
              <form>
                <FormInput
                  v-model="event.title"
                  type="text"
                  label="Titre"
                  id="title"
                />

                <FormInput
                  v-model="event.location"
                  type="text"
                  label="Où se situe l'événement"
                  id="location"
                />

                <FormInput
                  v-model="event.dateEvent"
                  type="date"
                  label="Quelle est la date de l'événement"
                  id="dateEvent"
                />
                <FormTextarea
                  v-model="event.description"
                  label="Description"
                  id="description"
                />

                <p class="error-message text-center" v-if="errorMessage">
                  {{ errorMessage }}
                </p>
                <div class="text-center mt-3">
                  <button @click.prevent="createEvent" class="btn btn-primary">
                    Envoyer
                  </button>
                  <nuxt-link class="nav-link" to="/user/login"
                    >Vous avez déjà un compte ?</nuxt-link
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error-message {
  color: red;
  font-style: italic;
  font-size: small;
}
</style>
