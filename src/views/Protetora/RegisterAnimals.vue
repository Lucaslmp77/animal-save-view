<template>
  <div class="containerFlex">
    <div class="title">Cadastrar Animal</div>
    <article v-if="notificationSave" class="message is-success">
      <div class="message-header">
        <h3>Sucesso</h3>
        <button
          @click="closeNotification"
          class="delete"
          aria-label="delete"
        ></button>
      </div>
      <div class="message-body">Animal cadastrado com sucesso!</div>
    </article>
    <form @submit.prevent="onSubmit" class="formGrid">
      <div class="field">
        <label class="label">Tipo</label>
        <v-select v-model="animalMock.type" :options="animalTypes"></v-select>
      </div>

      <div class="field">
        <label class="label">Tamanho</label>
        <v-select v-model="animalMock.size" :options="animalSizes"></v-select>
      </div>

      <div class="field">
        <label class="label">Nome</label>
        <input class="input" type="text" v-model="animalMock.name" />
      </div>

      <div class="field">
        <label class="label">Raça</label>
        <input class="input" type="text" v-model="animalMock.breed" />
      </div>

      <div class="field">
        <label class="label">Idade</label>
        <input class="input" type="number" v-model="animalMock.age" />
      </div>

      <div class="field">
        <label class="label">Vacinas Tomadas</label>
        <v-select
          v-model="animalMock.selectedVaccines"
          :options="animalMock.vaccines"
          multiple
        ></v-select>
      </div>

      <div class="field">
        <label class="label">Cor</label>
        <input class="input" type="text" v-model="animalMock.color" />
      </div>

      <div class="field">
        <label class="label">Observação</label>
        <input class="input" type="text" v-model="animalMock.observation" />
      </div>

      <button id="registerButton" class="button is-primary" type="submit">
        Register
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import vSelect from "vue-select";
import { AnimalType } from "@/model/enum/AnimalType";
import { AnimalSize } from "@/model/enum/AnimalSize";
import { Caregiver } from "@/model/Caregiver";
import { Animal } from "@/model/Animal";
import { Vaccination } from "@/model/Vaccination";
import { AnimalClient } from "@/client/Animal.client";
import { UserClient } from "@/client/User.client";

interface IAttributeMap {
  [key: string]: string;
}
@Component({
  components: {
    vSelect,
  },
})
export default class Register extends Vue {
  public animalTypes = Object.values(AnimalType).filter((value) =>
    isNaN(Number(value))
  );
  public animalSizes = Object.values(AnimalSize).filter((value) =>
    isNaN(Number(value))
  );
  public notificationSave: boolean = false;
  private animalClient: AnimalClient = new AnimalClient();
  private userClient: UserClient = new UserClient();
  public animalMock = {
    type: AnimalType.CACHORRO,
    size: AnimalSize.MEDIO,
    name: "",
    breed: "",
    age: "",
    color: "",
    vaccines: ["Raiva", "Parvovirose Canina", "Cinomose", "Hepatite Canina"],
    selectedVaccines: [],
    observation: " ",
    caregiver: {
      id: "",
    },
  };

  public async onSubmit() {
    const animalForm = await this.fromMock(this.animalMock);
    console.log(animalForm);
    await this.animalClient.save(animalForm);
    this.notificationSave = true;
    this.animalMock = this.defaultAnimalMock();
  }

  public async getCaregiver() {
    const userId = Number(this.$route.params.id);
    const caregiver = await this.userClient.findCaregiverByIdUser(userId);
    if (caregiver) {
      const caregiverId = caregiver.id;
      return caregiverId;
    } else return 0;
  }

  public defaultAnimalMock() {
    return {
      type: AnimalType.CACHORRO,
      size: AnimalSize.MEDIO,
      name: "",
      breed: "",
      age: "",
      color: "",
      vaccines: ["Raiva", "Parvovirose Canina", "Cinomose", "Hepatite Canina"],
      selectedVaccines: [],
      observation: " ",
      caregiver: {
        id: "",
      },
    };
  }

  public async fromMock(mock: any): Promise<Animal> {
    const animalForm: Partial<Animal> = {};

    animalForm.name = mock.name;
    animalForm.breed = mock.breed;
    animalForm.animalType = mock.type;
    animalForm.animalSize = mock.size;
    animalForm.color = mock.color;
    animalForm.age = Number(mock.age);
    if (mock.observation) animalForm.observation = mock.observation;
    else {
      animalForm.observation = "";
    }
    let vaccination = new Vaccination();
    vaccination.rabies = false;
    vaccination.canineHepatitis = false;
    vaccination.distemper = false;
    vaccination.canineParvovirus = false;

    this.setAttributesTrue(vaccination, mock.selectedVaccines);

    animalForm.vaccination = vaccination;
    animalForm.caregiver = new Caregiver();
    animalForm.caregiver.id = await this.getCaregiver();

    return animalForm as Animal;
  }

  setAttributesTrue(object: any, attributes: string[]): void {
    const attributeMap: IAttributeMap = {
      Raiva: "rabies",
      "Parvovirose Canina": "canineParvovirus",
      Cinomose: "distemper",
      "Hepatite Canina": "canineHepatitis",
    };

    for (let attribute of attributes) {
      if (
        attributeMap[attribute] &&
        object.hasOwnProperty(attributeMap[attribute])
      ) {
        object[attributeMap[attribute]] = true;
      }
    }
  }
  public closeNotification() {
    this.notificationSave = false;
  }
}
</script>

<style scoped>
@import "vue-select/dist/vue-select.css";
.title {
  align-self: center;
  font-size: xx-large;
  font-weight: bold;
}
.panel.is-primary .panel-tabs a.is-active {
  border-bottom-color: #48c88f;
}
.input,
.vs--searchable .vs__dropdown-toggle {
  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
  max-width: 100%;
  width: 100%;
  margin-left: 15px;
  max-width: 600px;
  margin: 0 auto;
}
#registerButton {
  background-color: #48c88f;
}

.vs--searchable .vs__dropdown-toggle {
  cursor: text;
  margin-left: 15px;
}
.containerFlex {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-self: flex-start;
  flex-grow: 1;
  background-color: #ebe3cc;
  margin-top: -3%;
}
.formGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  align-items: start;
}
.formGrid .button {
  grid-column: span 2;
}
</style>
