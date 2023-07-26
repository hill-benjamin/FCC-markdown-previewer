$(document).ready(function(){

// interpret carriage returns as line breaks   
    marked.setOptions({
        breaks: true
    }) 

// SECTION 1 - BUTTON FUNCTIONALITY (EXPAND)

    // EDITOR ----- EXPAND BUTTON

    const textarea = document.getElementById('editor');

    $('#editor-btn-expand').click(function(){
        $(this).toggle()
        $('#editor-btn-reduce').show()
        $('#previewer-container').hide()
        textarea.style.height = textarea.scrollHeight + 'px';
        textarea.style.minHeight = '87vh'
    });
    $('#editor-btn-reduce').click(function(){
        $(this).hide()
        $('#editor-btn-expand').show()
        $('#previewer-container').show()
        textarea.style.height = 'auto';
        textarea.style.minHeight= '200px'
    });

    // PREVIEWER ----- EXPAND BUTTON    

    $('#previewer-btn-expand').click(function(){
        $(this).toggle()
        $('#previewer-btn-reduce').show()
        $('#editor-container').hide()
        $('#previewer-container').css('min-height','94vh')
    });
        $('#previewer-btn-reduce').click(function(){
        $(this).hide()
        $('#previewer-btn-expand').show()
        $('#editor-container').show()
        $('#previewer-container').css('min-height','200px')
    });

// SECTION 2 - MARKDOWN PREVIEWER LOGIC ([editor]code --> result[previewer])    

let editorText = ''

function inputChange(){
    editorText = $("#editor").val();
    // const toHtml = editorText.marked;
    // $('#preview').html(toHtml);
    $('#preview').html(marked.parse(editorText))
}

$('#editor').on('input',inputChange)

inputChange()



// EXTRA

function checkScreenSize() {
    if (window.innerWidth >= 1156) {
        $('#editor-container').show()
        $('#previewer-container').show()
    
        $('#previewer-btn-expand').show()
        $('#previewer-btn-reduce').hide()
    }
}
checkScreenSize();
window.addEventListener('resize', checkScreenSize);
});
