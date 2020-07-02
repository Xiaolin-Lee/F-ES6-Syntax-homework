const inject = (items, sections) => {
    const result = items.slice();
    sections = sections.sort((item, next) => next.index - item.index);

    for (let {content, index} of sections) {
        result.splice(index, 0, content);
    }
    return result;
};
export { inject };
