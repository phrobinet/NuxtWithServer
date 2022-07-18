<script setup>
import { ref, reactive } from "vue";
import axios from "axios";

const router = useRouter();
const route = useRoute();
console.log(route.params.id);
const event = ref([]);
const errorMessage = ref(null);

const getOneEvent = () => {
  axios
    .get(`/event/${route.params.id}`)
    .then((response) => {
      console.log(response);
      event.value = response.data;
    })
    .catch((error) => {
      console.error(error.response.data);
      errorMessage.value = error.response.data;
    });
};
getOneEvent();

const deleteEvent = () => {
  axios
    .delete(`/event/${route.params.id}`)
    .then((response) => {
      console.log(response);
      router.push("/event");
    })
    .catch((error) => {
      console.error(error.response.data);
      errorMessage.value = error.response.data;
    });
};

const updateEvent = async () => {
  axios
    .patch(`/event/${route.params.id}`, {
      title: event.value.title,
      description: event.value.description,
      dateEvent: event.value.dateEvent,
      location: event.value.location,
      userId: "1234",
    })
    .then((response) => {
      console.log(response);
      event.value.title = "";
      event.value.description = "";
      event.value.dateEvent = "";
      event.value.location = "";
      router.push("/event");
    })
    .catch((error) => {
      errorMessage.value = error.response.data;
    });
};
</script>

<template>
  <div class="container">
    <div class="text-center my-5">
      <h1>Modifier votre événement</h1>
      <hr />
    </div>
    <div class="container my-5 py-5">
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
                  label="Titre"
                  id="title"
                  type="text"
                />

                <FormInput
                  v-model="event.location"
                  label="Où se situe l'événement"
                  id="location"
                  type="text"
                />

                <FormInput
                  v-model="event.dateEvent"
                  label="Quelle est la date de l'événement"
                  id="dateEvent"
                  type="date"
                />

                <FormTextarea
                  v-model="event.description"
                  label="Description"
                  id="description"
                />

                <p class="error-message text-center" v-if="errorMessage">
                  {{ errorMessage }}
                </p>
                <!-- <div class="text-center mt-3 mr-2">
                  <button @click.prevent="updateEvent" class="btn btn-primary">
                    Modifier
                  </button>
                  <button
                    @click.prevent="deleteEvent"
                    class="btn btn-outline-danger"
                  >
                    Supprimer
                  </button>
                  <nuxt-link class="nav-link" to="/user/login"
                    >Vous avez déjà un compte ?</nuxt-link
                  >
                </div> -->
                <div class="text-center">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <button type="button" class="btn btn-success">
                      Modifier
                    </button>
                    <button type="button" class="btn btn-danger">
                      Supprimer
                    </button>
                  </div>
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
