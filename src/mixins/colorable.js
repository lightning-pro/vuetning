export default {
    name: 'colorable',
    props: {
        color: String
    },
    methods: {
        setBackgroundColor() {
            if (this.color == null) return;
            const [colorName, colorModifier] = this.color.toString().trim().split(' ', 2);

            if (!!colorModifier) return `background-${colorName}-${colorModifier}`;
            return `background-${colorName}`;
        },
        setTextColor() {
            if (this.color == null) return;
            const [colorName, colorModifier] = this.color.toString().trim().split(' ', 2);

            if (!!colorModifier) return `color-${colorName}-${colorModifier}`;
            return `color-${colorName}`;
        },
    },
}
