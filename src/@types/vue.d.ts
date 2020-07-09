import Vue from 'vue'
import http from '@/http'

declare module 'vue/types/vue' {
  interface Vue {
    $toast: (text: string, duration?: number) => void
    $http: typeof http
  }
}
