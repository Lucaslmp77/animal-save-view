<template>
  <div class="container-principal">
    <div class="" v-if="notificacao.ativo">
      <div class="column is-12">
        <div :class="notificacao.classe" v-if="isVisible">
          <button @click="onClickFecharNotificacao" class="delete"></button>
          {{ notificacao.mensagem }}
        </div>
      </div>
    </div>
    <h1 id="notOccurrence" v-if="occurrenceList.length === 0">
      Nenhuma ocorrência!<br /><i class="fa-solid fa-file-circle-xmark"></i>
    </h1>
    <div class="column">
      <div
        class="box columns is-gapless"
        v-for="item in occurrenceList"
        style="
          justify-content: center;
          align-items: center;
          flex-direction: column;
        "
      >
        <header class="">
          <h3 class="">Ocorrência Nº{{ item.id }}</h3>
        </header>
        <div class="columns" style="width: 100%">
          <article class="column">
            <h5 class="card-header-title">Data:{{ " " + item.register }}</h5>
            <h5 class="card-header-title">Contato:{{ " " + item.contact }}</h5>
          </article>
          <article class="column">
            <h5
              class="card-header-title"
              style="align-items: center; display: flex"
            >
              Usuário que reportou:{{ "
            "+item.name}}
            </h5>
            <h5
              class="card-header-title"
              style="align-items: flex-start; text-align: start"
            >
              Descrição:{{ "
            "+item.description}}
            </h5>
          </article>
          <article class="column">
            <h5 class="card-header-title">
              Localidade:{{ " " + item.referenceLocal }}
            </h5>
            <h5 class="card-header-title">
              Situação:{{ " " + item.situation }}
            </h5>
          </article>
          <article class="column">
            <div class="control" style="margin-top: 10px">
              <button class="button is-link" @click="showModal(item.id)">
                Encaminhar Ocorrência
              </button>
              <Modal
                v-show="isModalVisible"
                @close="closeModal"
                :Ocorrencia="occurrence"
                :list-ocorrences="listOccurrences"
                :fecha-modal="closeModal"
              />
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";
import { Occurrences } from "@/model/Occurrences";
import { Message } from "@/model/Message";
import { OcurrencesClient } from "@/client/Ocurrences.client";
import Modal from "@/views/Modal.vue";

@Component({
  components: { Modal },
})
export default class RegisterPublic extends Vue {
  public occurrenceClient: OcurrencesClient = new OcurrencesClient();
  public occurrence: Occurrences = new Occurrences();
  public occurence: Occurrences = new Occurrences();
  public notificacao: Message = new Message();

  public occurrenceList: Occurrences[] = [];

  isModalVisible = false;
  isVisible = false;

  public idTres: number = 0;

  public mounted(): void {
    this.listOccurrences();
  }

  public listOccurrences(): void {
    this.occurrenceClient.listAll().then(
      (success) => {
        this.occurrenceList = success;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public FoundOccurrence(idtwo: number): void {
    this.occurrenceClient.findById(idtwo).then(
      (success) => {
        this.occurrence = success;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  public showComponent(): void {
    this.isVisible = true;

    setTimeout(() => {
      this.isVisible = false;
    }, 4000);
  }
  public onClickFecharNotificacao(): void {
    this.notificacao = new Message();
  }

  public showModal(id: number): void {
    this.FoundOccurrence(id);
    this.isModalVisible = true;
    localStorage.setItem("idocorrencia", id.toString());
  }
  public closeModal(): void {
    this.isModalVisible = false;
  }

  closeModalOtherPage() {
    this.$emit("closeModal");
  }
}
</script>

<style scoped>
.container-principal {
  height: 100vh;
  background-color: #ebe3cc;
}

#notOccurrence {
  font-size: 50px;
  padding: 30px;
}
</style>
