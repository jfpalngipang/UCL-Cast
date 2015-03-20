# UCL-Cast
Web App and RESTful API for casting on multimedia bulletin boards using Chromecast

Retrieving Queues

Sample:
    {action : getVideoQueue}

    getVideoQueue
    getImageQueue
    getTextQueue

Adding media entries to queue

    {action : 'addVideo', videoID : 'Xc84e4', deadline : ISODate}
    {action : 'addImage', imageUrl : 'https://www/dropbox.com/sample_image', deadline : ISODate}
    {action : 'addText', customText : 'Hi! How are you?', deadline : ISODate}

Deleting media entries from queue

    {action : 'deleteVideo', id : '4098329043hfiugh345'}
    {action : 'deleteImage', id : '4098329043hfiugh345'}
    {action : 'deleteText', id : '4098329043hfiugh345'}

Updating media entries from queue

    {action : 'changeVideoDeadline', id : '4098329043hfiugh345', new_deadline: ISODate}
    {action : 'changeImageDeadline', id : '4098329043hfiugh345', new_deadline: ISODate}
    {action : 'changeTextDeadline', id : '4098329043hfiugh345', new_deadline: ISODate}

    {action : 'changeVideoContent', id : '4098329043hfiugh345', new_videoID: 'vxcv234'}
    {action : 'changeImageContent', id : '4098329043hfiugh345', new_imageUrl: 'https://www/dropbox.com/sample_image'}
    {action : 'changeTextContent', id : '4098329043hfiugh345', new_customText: 'I am fine!'}



