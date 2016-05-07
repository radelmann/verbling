export const POST_COMMENT  = 'post_comment';

export function postComment(comment) {
  return {
    type: POST_COMMENT,
    payload: comment
  };
}