<script>
    export default {
        props: {
            left: {
                type: Number,
            },
            label: {
                type: String,
            },
            sortable: {
                type: Boolean,
                default: true,
            },
            type: {
                type: String,
                required: true,
                validator(value) {
                    return [
                        'action',
                        'action-link',
                        'avatar',
                        'badge',
                        'boolean',
                        'button',
                        'button-icon',
                        'currency',
                        'date',
                        'duration',
                        'email',
                        'icon',
                        'number',
                        'percent',
                        'text',
                        'url',
                    ].indexOf(value) !== -1
                },
            },
        },
        computed: {
            isSortable() {
                switch (this.type) {
                    case 'avatar':
                    case 'action':
                    case 'button':
                    case 'button-icon':
                        return false;

                    default:
                        return this.sortable;
                }
            }
        },
    }
</script>
