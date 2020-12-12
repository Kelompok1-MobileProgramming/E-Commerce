<template>
  <section class="section">
    <div class="container is-max-desktop">
    <h1 class="title">Users</h1>

    <hr>

    <div class="buttons">
        <b-button class="is-primary" tag="router-link" to="/user-add"> Add New User </b-button>

    </div>

    <b-table :data="users" :loading="isLoading">
        <b-table-column label="No" field="no" v-slot="props" width="50">
          {{ props.index + 1 }}
        </b-table-column>
        <b-table-column label="Full Name" field="fullname" v-slot="props">
          {{ props.row.fullname }}
        </b-table-column>
        <b-table-column label="Email" field="email" v-slot="props">
          {{ props.row.email }}
        </b-table-column>
        <b-table-column label="Username" field="username" v-slot="props">
          {{ props.row.username }}
        </b-table-column>
        <b-table-column custom key="actions" class="is-actions-cell" v-slot="props">
          <div class="buttons is-right">
            <b-button class="is-secondary" tag="router-link" :to="{ name: 'UserDetail', params: { id: props.row._id }}">Edit User</b-button>
            <b-button class="is-danger" @click="trashModal(props.row._id, props.row.fullname)">Delete</b-button>
          </div>
        </b-table-column>
      </b-table>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      users: [],
      isLoading: false
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.isLoading = true
      axios.get('http://localhost:9999/users')
        .then((r) => {
          if (r.data) {
            this.users = r.data
          }
        })
        .catch((e) => {
          this.$buefy.snackbar.open({
            message: 'Error!',
            type: 'is-danger',
            position: 'is-top'
          })
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    trashModal (id, fullname) {
      this.$buefy.dialog.confirm({
        title: 'Delete Confirmation',
        message: `Are you sure want to delete <b>${fullname}</b>?`,
        confirmText: 'Yes',
        cancelText: 'No',
        type: 'is-danger',
        onConfirm: () => {
          axios.delete(`http://localhost:9999/users/${id}`)
            .then((r) => {
              this.loadData()
              this.$buefy.snackbar.open({
                message: 'Success!',
                type: 'is-Success',
                position: 'is-top'
              })
            })
            .catch((e) => {
              this.$buefy.snackbar.open({
                message: 'Error!',
                type: 'is-danger',
                position: 'is-top'
              })
            })
        }
      })
    }
  }
}
</script>
