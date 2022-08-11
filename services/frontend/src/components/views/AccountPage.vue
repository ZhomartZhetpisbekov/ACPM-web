<template>
  <div class="account-page">
    <h2>{{ $t('accountPage.title') }}</h2>
    <div class="account-categories">
      <a @click="toggleIsOnSettings('settings')" :class="{ activeLink: isOnSettings }">{{ $t('accountPage.accountSetting') }}</a>
      <a @click="toggleIsOnSettings('membership')" :class="{ activeLink: !isOnSettings }">{{ $t('accountPage.membership') }}</a>
    </div>
    <hr />
    <div class="main-content">
      <div class="main-edit">
        <a @click="editInfo" :class="{ activeLink: isEditting }">{{ $t('accountPage.editInfo') }}</a>
      </div>
      <div class="user-info-container">
        <form @submit="submitHandler">
          <AccountForm
            v-for="(item, index) in formSections"
            :key="index"
            :sectionTitle="item.title"
            :sectionItems="item.inputFields"
            :isReadOnly="!isEditting"
          />
          <input v-if="isEditting" type="submit" value="Save" class="submit-btn">
        </form>
      </div>
      <div class="user-actions-container">
        <a @click="editInfo" :class="{ activeLink: isEditting }">{{ $t('accountPage.editInfo') }}</a>
        <a>{{ $t('accountPage.deleteAccount') }}</a>
        <a>{{ $t('accountPage.signOut') }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import AccountForm from "../molecules/AccountForm.vue";

export default {
  name: "AccountPage",
  components: { AccountForm },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      this.isEditting = false;
    },
    editInfo() {
      this.isEditting = true;
    },
    toggleIsOnSettings(route) {
      route == 'membership' ? this.isOnSettings = false : this.isOnSettings = true;
    }
  },
  data() {
    return {
      isOnSettings: true,
      isEditting: false,
      formSections: [
        {
          title: "Account information",
          inputFields: [
            {
              label: "Username",
              value: "renaidn",
              type: "text",
            },
            {
              label: "Password",
              value: "*******",
              type: "password",
            },
            {
              label: "Email",
              value: "johndoe@gmail.com",
              type: "email",
            },
            {
              label: "Phone number",
              value: "7777-333-4444",
              type: "tel",
            },
          ],
        },
        {
          title: "Personal information",
          inputFields: [
            {
              label: "First name",
              value: "Adina",
              type: "text",
            },
            {
              label: "Middle name",
              value: "",
              type: "text",
            },

            {
              label: "Last name",
              value: "Maratkyzy",
              type: "text",
            },
            {
              label: "Date of birth",
              value: "06/04/2002",
              type: "date",
            },
          ],
        },
        {
          title: "Address",
          inputFields: [
            {
              label: "Street address line 1",
              value: "Great street 58",
              type: "text",
            },
            {
              label: "Street address line 2",
              value: "",
              type: "text",
            },

            {
              label: "Country",
              value: "Kazakhstan",
              type: "text",
            },
            {
              label: "City",
              value: "Nur-Sultan",
              type: "text",
            },
          ],
        },
        {
          title: "Work information",
          inputFields: [
            {
              label: "Occupation",
              value: "Profession",
              type: "text",
            },
            {
              label: "Job title",
              value: "Masters of profession",
              type: "text",
            },
            {
              label: "Place of work",
              value: "National Bank of Professions (NPB)",
              type: "text",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
h2 {
  color: #005963;
}

a {
  color: #005963;
  line-height: 1.5rem;
  cursor: pointer;
}

.activeLink {
  border-bottom: 2px solid #005963;
}

.account-page {
  margin: 13rem 0 2rem;
  width: 100%;
  padding: 0 8rem;
}

.account-categories {
  margin-top: 2rem;
  display: flex;
  gap: 4rem;
}

.main-content {
  margin-top: 2rem;
  display: flex;
  /* justify-content: space-between; */
  gap: 4rem;
}

.main-edit {
  display: none;
  width: auto;
  text-align: right;
  margin-bottom: 1.5rem;
}

.user-info-container {
  width: 75%;
}

.user-actions-container {
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.submit-btn {
  padding: 1rem 3rem;
  background: #005963;
  font-size: 1rem;
  font-family: 'Gotham Pro Med';
  color: #fff;
  border: 0;
  cursor: pointer;
}

@media only screen and (max-width: 65rem) {
  .account-page {
    margin-top: 8rem;
    padding: 0 2rem;
  }
}

@media only screen and (max-width: 40rem) {
  .account-page {
    padding: 0 2rem;
  }

  .main-content {
    flex-direction: column;
    gap: 0;
  }

  .main-edit {
    display: block;
  }

  .main-edit a {
    padding: 0.3rem 0;
  }

  .user-info-container {
    width: 100%;
  }

  .user-actions-container {
    width: 100%;
    text-align: right;
  }

  .user-actions-container a:first-child {
    display: none;
  }
}
</style>