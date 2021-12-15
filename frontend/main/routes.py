from flask import render_template, request, Blueprint
from frontend.models import Post

main = Blueprint('main', __name__)


@main.route("/")
@main.route("/home")
def home():
    # page = request.args.get('page', 1, type=int)
    # posts = Post.query.order_by(Post.date_posted.desc()).paginate(page=page, per_page=5)
    return render_template('home.html')


@main.route("/about")
def about():
    return render_template('about.html', title='About')

@main.route("/contact")
def contact():
    return render_template('contact.html', title='Contact Us')

@main.route("/feedback")
def feedback():
    return render_template('feedback.html', title='Feedback')

@main.route("/tracking")
def tracking():
    return render_template('tracking.html', title='Tracker')

