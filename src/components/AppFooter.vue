<script setup>
import {tFooter, tHeader} from "../content/texts.js";
import TelegramIcon from "@/components/ui/TelegramIcon.vue";
import YouTubeIcon from "@/components/ui/YouTubeIcon.vue";
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import t from '@/content/buttonsAndInputs.js'
import {RouterLink} from "vue-router";
</script>

<template>
  <div class="container">
    <footer class="footer">
      <div class="logoDownloadBlock">
        <div class="logo">
          <router-link to="/home">
            <img src="@/assets/images/main/logo.svg" alt="logo">
          </router-link>
        </div>
        <div class="download">
          <a href="#">
            {{ tHeader.download }}
            <img src="@/assets/images/icons/download.svg" alt="download program">
          </a>
        </div>
      </div>

      <div class="email">
        <p>{{ tFooter.email }}</p>
      </div>

      <div class="following">
        <div class="socialMedia">
          <div>
            <p>{{ tFooter.followUs }}</p>
          </div>
          <div class="socialMediaIcons">
            <TelegramIcon class="footerIcon" />
            <YouTubeIcon class="footerIcon" />
          </div>
        </div>
        <div class="followForNews">
          <div>
            <p>{{ tFooter.doNotMissNews }}</p>
          </div>
          <form class="followForm">
              <BaseInput size="input-large" :placeholder="t.placeholders.email" />
              <BaseButton variant="btn-large" color="btn-black" type="submit" :text-content="t.follow" />
          </form>
        </div>
      </div>

      <div class="footer-bottom">
        <p>{{ tFooter.rightsReserved }}</p>
        <a href="#">{{ tFooter.privacyPolicy }}</a>
      </div>

    </footer>
  </div>
</template>

<style scoped lang="scss">
.footer {
  margin-top: 50px;
  .logoDownloadBlock {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 34px;
    .logo img {
      height: 22px;
    }
    .download {
      a {
        height: 20px;
        color: $red;
        display: inline-flex;
        align-items: center;
        gap: 5px;
        img {
          height: 24px;
        }
      }
    }
  }
  .email {
    margin-bottom: 34px;
    p {
      font-size: 26px;
    }
  }
  .following {
    margin-bottom: 40px;
  }
    .socialMedia {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 30px;
      p {
        font-size: 26px;
        font-weight: 450;
      }
      .socialMediaIcons {
        display: flex;
        gap: 12px;
      }
    }
    .followForNews {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 30px;
      p {
        font-size: 26px;
        font-weight: 450;
      }
      .followForm {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
    }
  }
  .footer-bottom {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    gap: 12px;
    p, a {
      font-size: 15px;
      color: $grey;
    }
}

@include min-width($bp-lg) {
  .footer {
    margin-top: 130px;
    .logoDownloadBlock {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 30px;
      .logo img{
        height: 38px;
      }
    }
    .email {
      margin-bottom: 50px;
    }
    .following {
      display: flex;
      justify-content: space-between;
      margin-bottom: 60px;
      .socialMedia {
        gap: 50px;
        margin-bottom: 0;
      }
      .followForNews {
        gap: 30px;
      }
      .followForm {
        flex-direction: row;
      }
    }
    .footer-bottom {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 56px;
    }
  }
}


</style>