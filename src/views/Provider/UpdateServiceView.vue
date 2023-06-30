<template>
    <section>
        <main>
            <article v-if="notificationSave" class="message is-success">
                <div class="message-header">
                    <h3>Sucesso</h3>
                    <button @click="closeNotification" class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    Serviço atualizado com sucesso!
                </div>
            </article>
            <div class="control">
                <h1 class="title">Editar Serviço</h1>
            </div>
            <div class="field">
                <label class="label">Nome do serviço</label>
                <div class="control has-icons-left">
                    <input v-model="task.name" @blur="validateInputName" :class="`${inputName}`" class="input" type="input"
                        placeholder="Ex: Ração">
                    <span class="icon is-small is-left">
                        <i class="fa fa-bag-shopping"></i>
                    </span>
                    <p v-if="errorMessageName">
                    <ul>
                        <li v-for="error in errorMessageName" :key="error">{{ error }}</li>
                    </ul>
                    </p>
                </div>
            </div>

            <div class="field">
                <label class="label">Custo</label>
                <div class="control has-icons-left">
                    <input v-model="task.cost" @blur="validateInputCost" :class="`${inputCost}`" class="input" type="input"
                        placeholder="Ex: 100.00">
                    <span class="icon is-small is-left">
                        <i class="fa fa-money-bill"></i>
                    </span>
                    <p v-if="errorMessageCost">
                    <ul>
                        <li v-for="error in errorMessageCost" :key="error">{{ error }}</li>
                    </ul>
                    </p>
                </div>
            </div>

            <div class="field">
                <label class="label">Valor mensal</label>
                <div class="control has-icons-left">
                    <input v-model="task.monthlyAmount" @blur="validadeInputMonthlyAmount" :class="`${inputMonthlyAmount}`"
                        class="input" type="input" placeholder="Ex: 10">
                    <span class="icon is-small is-left">
                        <i class="fa fa-chart-line"></i>
                    </span>
                    <p v-if="errorMessageMonthlyAmount">
                    <ul>
                        <li v-for="error in errorMessageMonthlyAmount" :key="error">{{ error }}</li>
                    </ul>
                    </p>
                </div>
            </div>

            <div class="field">
                <label class="label">Descrição</label>
                <div class="control has-icons-left">
                    <textarea v-model="task.description" @blur="validateInputDescription" :class="`${inputDescription}`"
                        class="input" placeholder="Descrição"></textarea>
                    <span class="icon is-small is-left">
                        <i class="fa fa-list"></i>
                    </span>
                    <p v-if="errorMessageDescription">
                    <ul>
                        <li v-for="error in errorMessageDescription" :key="error">{{ error }}</li>
                    </ul>
                    </p>
                </div>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <router-link to="/provider"><button class="button is-link is-light">Voltar</button></router-link>
                </div>
                <div class="control">
                    <button @click="onClickUpdate()" class="button is-primary is-focused">Atualizar</button>
                </div>
            </div>
        </main>
    </section>
</template>

<script lang="ts">
import { TaskClient } from '@/client/Task.client';
import { Task } from '@/model/Task';
import { Component, Vue } from 'vue-property-decorator'
import { Message } from '@/model/Message'

@Component
export default class EditServiceView extends Vue {

    private taskClient: TaskClient = new TaskClient()

    public task: Task = new Task()

    public taskList: Task[] = []

    private id = Number(this.$route.params.id)

    public inputName: string = 'input'
    public inputCost: string = 'input'
    public inputMonthlyAmount: string = 'input'
    public inputDescription: string = 'input'

    public errorMessageName: string[] = []
    public errorMessageCost: string[] = []
    public errorMessageMonthlyAmount: string[] = []
    public errorMessageDescription: string[] = []

    public notificacao: Message = new Message();

    public notificationSave: boolean = false;

    public mounted(): void {
        this.getTask()
    }

    private getTask(): void {
        this.taskClient.findById(this.id).then(
            success => {
                this.task = success
            },
            error => console.log(error)
        )
    }

    public onClickUpdate(): void {
        if (this.allInputsValids() === true) {
            this.taskClient.save(this.task).then(
                success => {
                    console.log('Serviço atualizado com sucesso!')
                    this.task = new Task()
                },
                error => {
                    console.log(error)
                }
            )
        }
    }

    public validateInputName() {
        if (!this.task.name) {
            this.errorMessageName = ['O campo "Nome" é obrigatório!']
            this.inputName = 'input is-danger'
        }
        else if (this.task.name.length > 25) {
            this.errorMessageName = ['O campo "Nome" deve ter no máximo 25 caracteres!']
            this.inputName = 'input is-danger'
        }
        else if (this.task.name.length < 3) {
            this.errorMessageName = ['O campo "Nome" deve ter no mínimo 3 caracteres!']
            this.inputName = 'input is-danger'
        } else {
            this.errorMessageName = []
            this.inputName = 'input is-success'
        }
    }

    public validateInputCost() {
        if (!this.task.cost) {
            this.errorMessageCost = ['O campo "Custo" é obrigatório!']
            this.inputCost = 'input is-danger'
        } else if (this.task.cost > 10000) {
            this.errorMessageCost = ['O campo "Custo" tem um limite máximo de 10.000!']
            this.inputCost = 'input is-danger'
        } else {
            this.errorMessageCost = []
            this.inputCost = 'input is-success'
        }
    }

    public validadeInputMonthlyAmount() {
        if (!this.task.monthlyAmount) {
            this.errorMessageMonthlyAmount = ['O campo "Valor mensal" é obrigatório!']
            this.inputMonthlyAmount = 'input is-danger'
        } else if (this.task.monthlyAmount > 10000) {
            this.errorMessageMonthlyAmount = ['O campo "Valor mensal" tem um limite de 10.000!']
            this.inputMonthlyAmount = 'input is-danger'
        } else {
            this.errorMessageMonthlyAmount = []
            this.inputMonthlyAmount = 'input is-success'
        }
    }

    public validateInputDescription() {
        if (!this.task.description) {
            this.errorMessageDescription = ['O campo "Descrição" é obrigatório!']
            this.inputDescription = 'input is-danger'
        }
        else if (this.task.description.length > 100) {
            this.errorMessageDescription = ['O campo "Descrição" deve ter no máximo 100 caracteres!']
            this.inputDescription = 'input is-danger'
        }
        else if (this.task.description.length < 5) {
            this.errorMessageDescription = ['O campo "Descrição" deve ter no mínimo 5 caracteres!']
            this.inputDescription = 'input is-danger'
        } else {
            this.errorMessageDescription = []
            this.inputDescription = 'input is-success'
        }
    }

    public allInputsValids(): boolean {
        if (this.inputName !== 'input is-danger' && this.inputCost !== 'input is-danger'
            && this.inputMonthlyAmount !== 'input is-danger' && this.inputDescription !== 'input is-danger') {
            return true
        } else {
            return false
        }
    }

    public closeNotification() {
        this.notificationSave = false;
    }
}
</script>

<style lang="scss" scoped>
@import "~bulma/bulma.sass";

main {

    .title {
        padding: 20px 0px 20px 0px;
    }

    textarea {
        resize: none;
        min-width: 300px;
        min-height: 150px;
        max-width: auto;
        max-height: auto;
    }
}
</style>