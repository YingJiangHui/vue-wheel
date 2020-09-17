import Toast from './toast'

let currentToast
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            console.log(currentToast)
            if (currentToast)
                currentToast.close()

            currentToast = helper({
                Vue, message, propsData: toastOptions, onClose: () => {
                    currentToast = null
                }
            })
        }
    }
}

function helper({Vue, message, propsData,onClose}) {
    const Constructor = Vue.extend(Toast)
    const toast = new Constructor({
        propsData
    })
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close',onClose)
    document.body.appendChild(toast.$el)
    return toast
}