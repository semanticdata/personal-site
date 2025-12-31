const buildTOC = (content) => {
  const headingRegex = /<(h[23])[^>]*>(.*?)<\/\1>/gi;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const [, tag, text] = match;
    const level = parseInt(tag.replace('h', ''));
    
    const cleanText = text
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .trim();

    if (cleanText) {
      const anchor = cleanText
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();

      headings.push({
        level,
        text: cleanText,
        anchor
      });
    }
  }

  if (headings.length === 0) {
    return '';
  }

  const isCollapsible = headings.length > 5;
  
  let tocHTML = `<nav id="table-of-contents" class="toc" aria-label="Table of Contents">`;
  tocHTML += '<details class="toc-details"' + (isCollapsible ? '' : ' open') + '>';
  tocHTML += '<summary class="toc-summary">';
  tocHTML += '<span class="toc-title">Table of Contents</span>';
  tocHTML += '</summary>';
  
  tocHTML += '<ul class="toc-list">';
  
  headings.forEach(heading => {
    tocHTML += `<li class="toc-item toc-level-${heading.level}">`;
    tocHTML += `<a href="#${heading.anchor}" class="toc-link">${heading.text}</a>`;
    tocHTML += '</li>';
  });
  
  tocHTML += '</ul>';
  tocHTML += '</details>';
  tocHTML += '</nav>';
  
  return tocHTML;
};

export default buildTOC;
