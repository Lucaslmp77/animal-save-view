<template>
  <main class="content column">
    <div class="panel is-primary">
      <div>
        <div v-if="select === '1'">
          <div class="message-body modal-container">
            <div class="container-all-inputs-modal">
              <div class="container-inputs-modal">
                <div class="field">
                  <label class="label">Data</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="associate.register"
                      readonly
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Nome</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="associate.firstName"
                      readonly
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Sobrenome</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="associate.lastName"
                      readonly
                    />
                  </div>
                </div>
              </div>

              <div class="container-inputs-modal">
                <div class="field">
                  <label class="label">CPF</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="associate.cpf"
                      readonly
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="associate.user.login"
                      readonly
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Contato</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="associate.contact"
                      readonly
                    />
                  </div>
                </div>
              </div>

              <div class="container-inputs-modal">
                <div class="field">
                  <label class="label">Bairro</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="associate.address.neighborhood"
                      readonly
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Rua</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="associate.address.road"
                      readonly
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Número</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="associate.address.houseNumber"
                      readonly
                    />
                  </div>
                </div>
              </div>
              <div id="container-bottons" class="field is-grouped">
                <div class="control">
                  <button
                    id="button-voltar"
                    :disabled="isLoading"
                    @click="closeModal"
                    class="button is-info is-focused"
                  >
                    Voltar
                  </button>
                </div>

                <div class="control">
                  <button
                    id="button-aprovar"
                    :disabled="isLoading"
                    @click="updateToApproved(associate.user.id)"
                    class="button is-success is-focused"
                  >
                    Habilitar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div v-if="select === '2'">
          <div class="message-body modal-container">
            <div class="container-all-inputs-modal">
              <div class="container-inputs-modal">
                <div class="field">
                  <label class="label">Data</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="provider.register"
                      readonly
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Nome fantasia</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="provider.fantasyName"
                      readonly
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Nome empresarial</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="provider.businessName"
                      readonly
                    />
                  </div>
                </div>
              </div>

              <div class="container-inputs-modal">
                <div class="field">
                  <label class="label">CNPJ</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="provider.cnpj"
                      readonly
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="provider.user.login"
                      readonly
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Contato</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="provider.contact"
                      readonly
                    />
                  </div>
                </div>
              </div>

              <div class="container-inputs-modal">
                <div class="field">
                  <label class="label">Bairro</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="provider.address.neighborhood"
                      readonly
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Rua</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="provider.address.road"
                      readonly
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Número</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="provider.address.houseNumber"
                      readonly
                    />
                  </div>
                </div>
              </div>
              <div id="container-bottons" class="field is-grouped">
                <div class="control">
                  <button
                    id="button-voltar"
                    :disabled="isLoading"
                    @click="closeModal"
                    class="button is-info is-focused"
                  >
                    Voltar
                  </button>
                </div>
                <div class="control">
                  <button
                    id="button-aprovar"
                    :disabled="isLoading"
                    @click="updateToApproved(provider.user.id)"
                    class="button is-success is-focused"
                  >
                  Habilitar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div v-if="select === '3'">
          <div class="message-body modal-container">
            <div class="container-all-inputs-modal">
              <div class="container-inputs-modal">
                <div class="field">
                  <label class="label">Data</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="caregiver.register"
                      readonly
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Nome</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="caregiver.firstName"
                      readonly
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Sobrenome</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="caregiver.lastName"
                      readonly
                    />
                  </div>
                </div>
              </div>

              <div class="container-inputs-modal">
                <div class="field">
                  <label class="label">CPF</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="caregiver.cpf"
                      readonly
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="caregiver.user.login"
                      readonly
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Contato</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="caregiver.contact"
                      readonly
                    />
                  </div>
                </div>
              </div>

              <div class="container-inputs-modal">
                <div class="field">
                  <label class="label">Capacidade de animais</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="caregiver.capacityAnimals"
                      readonly
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Espaço físico</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="caregiver.physicalSpace"
                      readonly
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Gastos</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="caregiver.spending"
                      readonly
                    />
                  </div>
                </div>
              </div>

              <div class="container-inputs-modal">
                <div class="field">
                  <label class="label">Bairro</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="caregiver.address.neighborhood"
                      readonly
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Rua</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="caregiver.address.road"
                      readonly
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Número</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="caregiver.address.houseNumber"
                      readonly
                    />
                  </div>
                </div>
              </div>
              <div id="container-bottons" class="field is-grouped">
                <div class="control">
                  <button
                    id="button-voltar"
                    :disabled="isLoading"
                    @click="closeModal"
                    class="button is-info is-focused"
                  >
                    Voltar
                  </button>
                </div>

                <div class="control">
                  <button
                    id="button-aprovar"
                    :disabled="isLoading"
                    @click="updateToApproved(caregiver.user.id)"
                    class="button is-success is-focused"
                  >
                  Habilitar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="isLoading" class="loading-container">
        <div class="loading-spinner"></div>
      </div>

      <div class="columns" v-if="notificacao.ativo">
        <div class="column is-12">
          <div :class="notificacao.classe" v-if="isVisible">
            <button @click="onClickFecharNotificacao" class="delete"></button>
            {{ notificacao.mensagem }}
          </div>
        </div>
      </div>
      <div class="table-container">
        <table class="table is-bordered is-striped is-narrow is-hoverable">
          <thead class="blue">
            <tr>
              <th>ID do Usuário</th>
              <th>Data</th>
              <th>Nome</th>
              <th>Perfil de acesso</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="table-row"
              v-if="
                item.user.authorities.map((t) => t.authority).join(',') ===
                'ROLE_ASSOCIATE'
              "
              v-for="item in allRejected"
            >
              <td>{{ item.user.id }}</td>
              <td>{{ item.register }}</td>
              <td>
                {{
                  item.businessName == null
                    ? item.firstName + " " + item.lastName
                    : item.businessName
                }}
              </td>
              <td
                v-if="
                  item.user.authorities.map((t) => t.authority).join(',') ===
                  'ROLE_ASSOCIATE'
                "
              >
                Associado(a)
              </td>
              <td
                v-if="
                  item.user.authorities.map((t) => t.authority).join(',') ===
                  'ROLE_PROVIDER'
                "
              >
                Fornecedor(a)
              </td>
              <td
                v-if="
                  item.user.authorities.map((t) => t.authority).join(',') ===
                  'ROLE_CAREGIVER'
                "
              >
                Protetor(a)
              </td>
              <td class="container_buttons">
                <button
                  id="button-detalhar"
                  :class="[
                    'button',
                    'is-small',
                    'is-warning',
                    { 'is-disabled': select !== '0' },
                  ]"
                  :disabled="select !== '0' || isLoading"
                  @click="findByIdAssociate(item.id)"
                >
                  <strong>Detalhar</strong>
                </button>
                <button
                  id="button-aprovar"
                  :class="[
                    'button',
                    'is-small',
                    'is-success',
                    { 'is-disabled': select !== '0' },
                  ]"
                  :disabled="select !== '0' || isLoading"
                  @click="updateToApproved(item.user.id)"
                >
                  <strong>Habilitar</strong>
                </button>
              </td>
            </tr>

            <tr
              class="table-row"
              v-if="
                item.user.authorities.map((t) => t.authority).join(',') ===
                'ROLE_PROVIDER'
              "
              v-for="item in allRejected"
            >
              <td>{{ item.user.id }}</td>
              <td>{{ item.register }}</td>
              <td>
                {{
                  item.businessName == null
                    ? item.firstName + " " + item.lastName
                    : item.businessName
                }}
              </td>
              <td
                v-if="
                  item.user.authorities.map((t) => t.authority).join(',') ===
                  'ROLE_ASSOCIATE'
                "
              >
                Associado(a)
              </td>
              <td
                v-if="
                  item.user.authorities.map((t) => t.authority).join(',') ===
                  'ROLE_PROVIDER'
                "
              >
                Fornecedor(a)
              </td>
              <td
                v-if="
                  item.user.authorities.map((t) => t.authority).join(',') ===
                  'ROLE_CAREGIVER'
                "
              >
                Protetor(a)
              </td>
              <td class="container_buttons">
                <button
                  id="button-detalhar"
                  :class="[
                    'button',
                    'is-small',
                    'is-warning',
                    { 'is-disabled': select !== '0' },
                  ]"
                  :disabled="select !== '0' || isLoading"
                  @click="findByIdProvider(item.id)"
                >
                  <strong>Detalhar</strong>
                </button>
                <button
                  id="button-aprovar"
                  :class="[
                    'button',
                    'is-small',
                    'is-success',
                    { 'is-disabled': select !== '0' },
                  ]"
                  :disabled="select !== '0' || isLoading"
                  @click="updateToApproved(item.user.id)"
                >
                  <strong>Habilitar</strong>
                </button>
              </td>
            </tr>

            <tr
              class="table-row"
              v-if="
                item.user.authorities.map((t) => t.authority).join(',') ===
                'ROLE_CAREGIVER'
              "
              v-for="item in allRejected"
            >
              <td>{{ item.user.id }}</td>
              <td>{{ item.register }}</td>
              <td>
                {{
                  item.businessName == null
                    ? item.firstName + " " + item.lastName
                    : item.businessName
                }}
              </td>
              <td
                v-if="
                  item.user.authorities.map((t) => t.authority).join(',') ===
                  'ROLE_ASSOCIATE'
                "
              >
                Associado(a)
              </td>
              <td
                v-if="
                  item.user.authorities.map((t) => t.authority).join(',') ===
                  'ROLE_PROVIDER'
                "
              >
                Fornecedor(a)
              </td>
              <td
                v-if="
                  item.user.authorities.map((t) => t.authority).join(',') ===
                  'ROLE_CAREGIVER'
                "
              >
                Protetor(a)
              </td>
              <td class="container_buttons">
                <button
                  id="button-detalhar"
                  :class="[
                    'button',
                    'is-small',
                    'is-warning',
                    { 'is-disabled': select !== '0' },
                  ]"
                  :disabled="select !== '0' || isLoading"
                  @click="findByIdCaregiver(item.id)"
                >
                  <strong>Detalhar</strong>
                </button>
                <button
                  id="button-aprovar"
                  :class="[
                    'button',
                    'is-small',
                    'is-success',
                    { 'is-disabled': select !== '0' },
                  ]"
                  :disabled="select !== '0' || isLoading"
                  @click="updateToApproved(item.user.id)"
                >
                  <strong>Habilitar</strong>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <h1 id="notOccurrence" v-if="allRejected.length === 0">
          Nenhum usuário pendente!<br /><i
            class="fa-solid fa-file-circle-xmark"
          ></i>
        </h1>
      </div>
    </div>
  </main>
</template>

<script lang="ts" scoped>
import { Component, Vue } from "vue-property-decorator";
import { AdminClient } from "@/client/Admin.client";
import { pendings } from "@/model/Pending";
import { Message } from "@/model/Message";
import RegisterPublic from "@/views/Administrator/RegisterPublic.vue";
import ManagerUsers from "@/views/Administrator/ManagerUsers.vue";
import { AssociateClient } from "@/client/Associate.client";
import { Associate } from "@/model/Associate";
import { ProviderClient } from "@/client/Provider.client";
import { Provider } from "@/model/Provider";
import { Caregiver } from "@/model/Caregiver";
import { CaregiverClient } from "@/client/Caregiver.client";

@Component({
  components: {
    RegisterPublic,
    ManagerUsers,
  },
})
export default class UsersRejected extends Vue {
  public adminClient: AdminClient = new AdminClient();
  public associateClient: AssociateClient = new AssociateClient();
  public providerClient: ProviderClient = new ProviderClient();
  public caregiverClient: CaregiverClient = new CaregiverClient();

  public notificacao: Message = new Message();

  public associate: Associate = new Associate();
  public provider: Provider = new Provider();
  public caregiver: Caregiver = new Caregiver();

  public allRejected: pendings[] = [];

  public isVisible: boolean = false;
  public isLoading: boolean = false;

  public select: string = "0";

  public mounted(): void {
    this.onClickRequisicao();
  }

  public onClickRequisicao(): void {
    this.adminClient.findAllRejected().then(
      (success) => {
        this.allRejected = success;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public findByIdAssociate(id: number): void {
    this.associateClient.findById(id).then(
      (success) => {
        this.associate = success;
        this.select = "1";
      },
      (error) => console.log(error)
    );
  }

  public findByIdProvider(id: number): void {
    this.providerClient.findById(id).then(
      (success) => {
        this.provider = success;
        this.select = "2";
      },
      (error) => console.log(error)
    );
  }

  public findByIdCaregiver(id: number): void {
    this.caregiverClient.findById(id).then(
      (success) => {
        this.caregiver = success;
        this.select = "3";
      },
      (error) => console.log(error)
    );
  }

  public updateToApproved(id: number): void {
    this.isLoading = true;
    this.adminClient.updateStatusPendingToApproved(id).then(
      (success) => {
        this.showComponent();
        this.notificacao = this.notificacao.new(
          true,
          "notification is-success",
          "Usuário Aprovado!"
        );
        this.onClickRequisicao();
        this.select = "0";
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
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

  public closeModal() {
    this.select = "0";
  }
}
</script>

<style scoped>
main {
  height: 100vh;
  background-color: #ebe3cc;
}

tr {
  background-color: #ebe3cc;
}

td {
  background-color: #ebe3cc;
}

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.is-disabled {
  display: none;
}

.container-all-inputs-modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ebe3cc;
  border-radius: 10px;
  padding: 30px;
  border: 2px solid #ebe3cc;
}

.container-inputs-modal {
  display: flex;
  gap: 20px;
}

#container-bottons {
  padding-top: 15px;
}

a {
  display: flex;
}

.panel.is-primary .panel-tabs a.is-active {
  border-bottom-color: hsl(171deg, 100%, 41%);
}

.container_buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

#button-detalhar {
  width: 110px;
  height: 35px;
  border-radius: 5px;
  background-color: #fbbd08;
  color: #002d4c;
  font-size: 14px;
  font-weight: 700;

  font-family: "Poppins";
  font-style: normal;
}

#button-detalhar:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

#button-aprovar {
  width: 110px;
  height: 35px;
  border-radius: 5px;
  background-color: #48c88f;
  color: white;
  font-size: 14px;
  font-weight: 700;

  font-family: "Poppins";
  font-style: normal;
}

#button-aprovar:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

#button-voltar {
  width: 110px;
  height: 35px;
  border-radius: 5px;
  background-color: #3b95fc;
  color: white;
  font-size: 14px;
  font-weight: 700;

  font-family: "Poppins";
  font-style: normal;
}

#button-voltar:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

#notOccurrence {
  font-size: 50px;
  padding: 30px;
}

.loading-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.loading-spinner {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 8px solid rgba(107, 107, 107, 0.1);
  border-top-color: #636363;
  animation: loading-spinner-animation 0.8s linear infinite;
}

@keyframes loading-spinner-animation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
