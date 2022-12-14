<template>
  <Wrapper>
    <Breadcrumbs :breadcrumbs="currentLanguage === 'en' ? breadcrumbsEn : breadcrumbsRu" />
    <div class="text-center my-5">
      <h1>{{ currentLanguage === 'en' ? 'Contacts' : 'Контакты' }}</h1>
    </div>
    <div class="px-5 contact-box">
      <div class="my-5 pb-5">
        <h2>{{ email.find(e => e.lang === currentLanguage).title }}</h2>
        <p class="text-subtitle-1 my-5">Get in touch by {{ email.find(e => e.lang === currentLanguage).email }}</p>
        <p class="text-subtitle-1 my-5 pb-5">{{ email.find(e => e.lang === currentLanguage).text }}</p>
        <div class="mt-5">
          <a href="mailto:mail&commat;mail&period;ru" class="email">{{ email.find(e => e.lang === currentLanguage).btn }}</a>
        </div>
      </div>
      <v-divider></v-divider>

      <div class="my-5">
        <h2>{{ phone.find(e => e.lang === currentLanguage).title }}</h2>
        <div class="text-h6 my-5">{{ phone.find(e => e.lang === currentLanguage).number }}</div>
        <p>{{ openHours.find(e => e.lang === currentLanguage).text }}</p>
        <p class="text-caption">{{ excluding.find(e => e.lang === currentLanguage).text }}</p>
      </div>
      <v-divider></v-divider>

      <div class="my-5">
        <h2>{{ chat.find(e => e.lang === currentLanguage).title }}</h2>
        <p class="text-subtitle-1 my-5">{{ chat.find(e => e.lang === currentLanguage).text }}</p>
        <p>{{ openHours.find(e => e.lang === currentLanguage).text }}</p>
        <p class="text-caption">{{ excluding.find(e => e.lang === currentLanguage).text }}</p>
        <ButtonRound 
          :title="chat.find(e => e.lang === currentLanguage).chat" 
          :dark="true" 
          :color="'black'" 
          :disabled="false"
          @callback="startChat"
        />
      </div>
    </div>
  </Wrapper>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';
  import Wrapper from '@/components/Wrapper.vue';
  import ButtonFlat from '@/components/buttons/ButtonFlat.vue';
  import Breadcrumbs from '@/components/Breadcrumbs.vue';
  import ButtonRound from '@/components/buttons/ButtonRound.vue';

  export default {
    name: 'Contact',
    components: {
      Wrapper,
      ButtonFlat,
      ButtonRound,
      Breadcrumbs
    },
    data: () => ({
      phone: [
        {lang: 'en', title: 'Phone', text: '', number: '+321-654-987'},
        {lang: 'ru', title: 'Телефон', text: '', number: '+123-456-789'}
      ],
      email: [
        {lang: 'en', title: 'Email', text: `We'll reply by the end of the next working day, often much sooner`, email: 'email@mail.com', btn: 'Send my email'},
        {lang: 'ru', title: 'Электронная почта', text: 'Мы ответим вас в течении нескольких рабочих дней или раньше', email: 'email@mail.com', btn: 'Отправить письмо'}
      ],
      chat: [
        {lang: 'en', title: 'Live Chat', text: 'A Customer Care Specialist is ready to chat', chat: 'Start chat'},
        {lang: 'ru', title: 'Живой чат', text: 'Наш специалист готов ответить вам в чате', chat: 'Начать чат'}
      ],
      excluding: [
        {lang: 'en', text: '*Excluding Public Holidays'},
        {lang: 'ru', text: '*Исключая выходные и праздничные дни'}
      ],
      openHours: [
        {lang: 'en', text: 'Mon - Fri: 9:00am - 6:00pm (EDT)'},
        {lang: 'ru', text: 'Пн - Пт: 9:00 - 18:00 (EDT)'}        
      ]
    }),
    computed: {
      ...mapGetters(["currentLanguageText", "currentLanguageIcon"]),
      ...mapState({
        currentLanguage: (state) => state.language.currentLanguage,
      }),
      breadcrumbsEn() {
        return [
          {
            text: 'Home',
            disabled: false,
            href: 'main',
          },
          {
            text: 'Contacts',
            disabled: true,
          },
        ]
      },
      breadcrumbsRu() {
        return [
          {
            text: 'Главная',
            disabled: false,
            href: 'main',
          },
          {
            text: 'Контакты',
            disabled: true,
          },
        ]
      },
    },
    methods: {
      goTo(link) {
        this.$router.push(link);
      },
      sendEmail(encoded) {
        let address = atob(encoded)
        window.location.href = "mailto:" + address
      },
      startChat() {
        console.log('Start chat')
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/styles/_variables';
  .contact-box {
    margin: 0 7rem;
    .email {
    color: $white;
    text-decoration: none;
    background-color: $black;
    padding: 17px;
    border-radius: 28px;
    font-weight: $font-weight-semibold;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 
                0px 2px 2px 0px rgba(0, 0, 0, 0.14),
                0px 1px 5px 0px rgba(0, 0, 0, 0.12);

    &:hover {
      //color: $palette-gray;
    }
  }
  }

</style>