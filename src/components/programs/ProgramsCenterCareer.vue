<script setup>
import { tPrograms } from '@/content/texts.js'
</script>

<template>
<section>
  <div class="container">
    <div class="title">
      <h2>{{ tPrograms.centerOfCareer.title.part1 }}<span class="painted">{{ tPrograms.centerOfCareer.title.paintedPart }}</span></h2>
    </div>
    <div class="info-blocks">
      <div class="texts">
        <p class="bolt-text">{{ tPrograms.centerOfCareer.block.title}}</p>
        <ul>
          <li>{{ tPrograms.centerOfCareer.block.lists.list1}}</li>
          <li>{{ tPrograms.centerOfCareer.block.lists.list2}}</li>
          <li>{{ tPrograms.centerOfCareer.block.lists.list3}}</li>
        </ul>
      </div>
      <div class="image-block">
        <img src="@/assets/images/double pages/center-of-career.avif" alt="центр карьеры">
      </div>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
section {
  padding: 40px 0;
  .container {
    display: flex;
    flex-direction: column;
    gap: 25px;
    .title {
      h2 {
        font-size: 36px;
      }
    }
    .info-blocks {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .texts {
        border: 1px solid $black;
        border-radius: 10px;
        padding: 10px;
        p.bolt-text {
          font-size: 20px;
          font-weight: 450;
          margin-bottom: 10px;
          line-height: 100%;
        }
        ul {
          li {
            font-size: 20px;
            line-height: 120%;
            display: flex;
            align-items: baseline;
            margin-bottom: 10px;
            &::before {
              content: "●";
              margin-right: 10px;
            }
          }
        }
      }
      .image-block {
        width: 100%;
        height: 336px;
        border-radius: 10px;
        overflow: hidden;
        img {
          object-fit: cover;
          object-position: 50% 0;
          width: 100%;
          height: 336px;
        }
      }
    }
  }
}
@include min-width($bp-md) {
  section {
    padding-bottom: 80px;
    .container {
      gap: 30px;
      .title {
        h2 {
          font-size: 56px;
        }
      }
      .info-blocks {
        .texts {
          padding: 15px;
          p.bolt-text {
            font-size: 26px;
            margin-bottom: 16px;
          }
          ul {
            li {
              font-size: 26px;
            }
          }
        }
        .image-block {
          img {
            object-position: 50% 60%;
          }
        }
      }
    }
  }
}
@include min-width($bp-lg) {
  section {
    padding-bottom: 120px;
    .container {
      gap: 40px;
      .info-blocks {
        flex-direction: row;
        .texts {
          width: 50%;
          height: auto;
        }
        .image-block {
          width: 50%;
          height: auto;
          img {
            height: 100%;
          }
        }
      }
    }
  }
}
</style>