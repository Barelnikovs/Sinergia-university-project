export function useScrollTo() {
    function scrollToBlock(id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return { scrollToBlock };
}